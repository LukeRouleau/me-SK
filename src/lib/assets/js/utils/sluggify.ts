/**
 * Take a string as an argument and returns a slugified version of the string.
 * A slug is typically used in URLs to create a human-readable version of a 
 * resource's name or title.
 * 
 * For example, if you pass the string "Hello, World!" to the sluggify function, 
 * it will return the string "hello_world".
 */
const sluggify = (str: string): string => {
	return str
	.toLowerCase()
	.replace(/\s/g, '_')
	.replace(/[^A-z0-9_-]/g, '')
}

export default sluggify
