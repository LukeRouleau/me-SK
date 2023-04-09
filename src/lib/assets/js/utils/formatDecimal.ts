/**
 * Formats a decimal number to a specified precision 
 */ 
const formatDecimal = (val: number, precision = 3): number => parseFloat(val.toFixed(precision))

export default formatDecimal