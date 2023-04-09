/**
 * Clamp a value to a range.
 * @param {number} min - minimum value in the range
 * @param {number} val - value to be clamped
 * @param {number} max - maximum value in the range
 * @returns {number} clamped value
 */
export const clamp = (min: number, val: number, max:number): number => {
	return Math.min(max, Math.max(val, min))
}

export default clamp