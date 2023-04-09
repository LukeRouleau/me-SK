import type Post from '$lib/types/post'
import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { dev } from '$app/environment'

/**
 * Fetch an array of blog post objects from a collection of markdown files
 * stored in the application's file system
 * returns a Promise that resolves to an array of Post objects.
 * PostsEndpointOptions is an optional parameter object that has three properties,
 * offset, limit, and category. These properties have default values of 0, 10, and '', respectively.	
 */
const fetchPosts = async ({ offset = 0, limit = 10, category = '' }: PostsEndpointOptions = {}): Promise<Post[]> => {
	let posts: Post[]

	// Import all of the markdown files in the content/posts directory
	posts = await Promise.all(
		Object.entries(import.meta.glob(`../../../content/posts/*.md`)).map(async ([path, page]) => {
			const { metadata } = await page()
			const slug = path.split('/').pop().split('.').shift()
			return { ...metadata, slug }
		})
	)

	// Filter out any posts that have a draft property with a value of true when the dev variable is false.
	if (!dev) posts = posts.filter(post => post.draft !== true)

	// Sort the posts by date in descending order
	let sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

	// Filter the posts by category if a category is provided
	if (category) {
		sortedPosts = posts.filter(post => post.categories.includes(category))
	}

	// If an offset is provided, slice the posts array starting at the offset
	if (offset) {
		sortedPosts = sortedPosts.slice(offset)
	}

	// -1 means all posts, so -1 skips limiting
	if (limit && limit != -1 && limit < sortedPosts.length) {
		sortedPosts = sortedPosts.slice(0, limit)
	}

	// Map the posts to a new array of Post objects
	const finalPosts = sortedPosts.map(post => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		date: post.date,
		categories: post.categories,
	}))

	return finalPosts
}

export default fetchPosts