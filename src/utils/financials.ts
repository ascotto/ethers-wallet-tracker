// number with commas
export const formatThousands = (
	amount: string,
	decimals: number = 0,
): string => {
	amount = parseFloat(amount).toFixed(decimals)

	amount.toString().replace(/,/g, '.')

	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
