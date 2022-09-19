import { Divider, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import TokenChip from '../atoms/TokenChip'
import { WalletCardProps, WalletsBalances } from '../../types'

const WalletCard: React.FC<{
	wallet: WalletCardProps
	onUpdateClass: string
}> = ({ wallet, onUpdateClass }) => {
	return (
		<Container maxWidth="lg" key={wallet.wallet}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Paper
						className={['wallet-card', onUpdateClass].join(' ')}
						sx={{
							p: 3,
							mb: 4,
							boxShadow:
								'0 4px 6px hsla(0, 0%, 0%, 0.05) ,0 16px 32px hsla(0, 0%, 0.1%, 0.1)',
						}}
					>
						<Typography variant="body1" component="p" gutterBottom>
							Wallet: {wallet.wallet}
						</Typography>
						<Divider />
						<Grid container sx={{ mt: 2, width: '100%' }} item xs={12}>
							{wallet.balances.map((token: WalletsBalances) => {
								return (
									<TokenChip
										key={token.name}
										name={token.name}
										ticker={token.ticker}
										balance={token.balance}
									/>
								)
							})}
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default WalletCard
