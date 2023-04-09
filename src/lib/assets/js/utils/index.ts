/**
 * By exporting these functions from index.ts, other modules can import them 
 * all from a single file instead of having to import each function separately. 
 * This can help make the code more organized and easier to maintain.
 */

import appendScriptToHead from './appendScriptToHead'
import fetchPosts from './fetchPosts'
import prefersReducedData from './prefersReducedData'
import readableDate from './readableDate'
import sluggify from './sluggify'
import formatDecimal from './formatDecimal'
import clamp from './clamp'

export {
	appendScriptToHead,
	fetchPosts,
	prefersReducedData,
	readableDate,
	sluggify,
	formatDecimal,
	clamp
}