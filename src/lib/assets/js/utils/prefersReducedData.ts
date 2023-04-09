/**
 * Determines whether the user has indicated a preference for reduced data usage
 * 
 * This function can be useful for optimizing a website's performance for users 
 * who are on slow or limited data connections. If the user has indicated a 
 * preference for reduced data usage, the website can choose to load smaller images, 
 * fewer videos, and less data in general to optimize for the user's connection.
 */
const prefersReducedData = (): boolean => {

    // Create a media query string that checks for the prefers-reduced-data media feature
	return window.matchMedia(
		`not all and (prefers-reduced-data), (prefers-reduced-data)`
	).matches
}

export default prefersReducedData