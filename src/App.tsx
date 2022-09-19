import './App.css'
import { Chip, Container, Divider, Grid, Typography } from '@mui/material'
import { ui } from './constants/ui'
import AppTopBar from './components/molecules/AppBar'
import { useContext, useEffect } from 'react'
import { getWallets } from './utils/storage'
import { GlobalWalletsStore } from './store/wallets/wallets.store'

const App: React.FC = () => {
	const { wallets, loadWallets } = useContext(GlobalWalletsStore)

	useEffect(() => {
		if (wallets.length === 0) {
			getWalletsHandler()
		}
	}, [])

	const getWalletsHandler = async () => {
		const ethWallets = await getWallets()
		loadWallets(ethWallets)
	}

	return (
		<div className="App">
			<AppTopBar />
			<Container maxWidth={ui.xl}>
				<Grid container sx={{ mt: 3 }} spacing={2}>
					<Grid item xs={3}>
						<Typography variant="h6" gutterBottom component="h6">
							ETH Wallets
						</Typography>
						{wallets.length > 0 ? (
							wallets.map((wallet, i) => <Chip key={i} label={wallet} />)
						) : (
							<p>No wallets</p>
						)}
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Grid item xs>
						<Typography variant="h6" gutterBottom component="h6"></Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default App
