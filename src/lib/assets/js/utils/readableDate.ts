const months: string[] = [
    null, // January should be 1, not 0, etc.
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

/**
 * Take in a date string in the format "YYYY-MM-DD" and
 * returns a string in the format "Month Day, Year".
 * For example, if the input is "2022-01-15",
 * the output would be "January 15, 2022"
 */
const readableDate = (date: string): string => {
	if (!date) return date

	const splitDate = date.split('-')

	const month: string = months[parseInt(splitDate[1])]
	const day: number = parseInt(splitDate[2])
	const year: string = splitDate[0]

	return `${month} ${day}, ${year}`
}

export default readableDate