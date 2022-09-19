import { Chip, Grid, Typography } from '@mui/material'
import { formatThousands } from '../../utils/financials'

const TokenChip: React.FC<{
	name: string
	ticker: string
	balance: string
}> = ({ name, ticker, balance }) => {
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Chip label={name} />
			<Typography variant="body2" display="inline" color="text.secondary">
				{' $'}
				{formatThousands(balance, 0)}
				{' ' + ticker}
			</Typography>
		</Grid>
	)
}

export default TokenChip
