/**
 * Append a script to the head of the document
 * The script has the attribute charset set to utf-8
 * @param src - The src attribute of the script
 * @param async - If you want the script to be loaded asynchronously
 */
const appendScriptToHead = (src: string, async = true): void => {
	const head = document.getElementsByTagName('head')[0]
	const script = document.createElement('script')
	script.src = src
	script.type = 'text/javascript'
	script.async = async
	script.setAttribute('charset', 'utf-8')

	head.appendChild(script)
}

export default appendScriptToHead