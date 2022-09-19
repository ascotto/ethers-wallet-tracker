import './App.css'
import { Chip, Container, Divider, Grid, Typography } from '@mui/material'
import { ui } from './constants/ui'
import AppTopBar from './components/molecules/AppBar'
import { useContext, useEffect, useState } from 'react'
import { getWallets } from './utils/storage'
import { GlobalWalletsStore } from './store/wallets/wallets.store'
import { ethers } from 'ethers'
import { WSS_API } from './endpoints/endpoint'
import tokens from './constants/tokens'
import { getBalanceForAddress } from './utils/contract'
import WalletCard from './components/molecules/WalletCard'
import { WalletCardProps } from './types'

const App: React.FC = () => {
	const [walletsBalances, setWalletsBalances] = useState<any>([])
	// const [lastUpdateTime, setLastUpdateTime] = useState<Date>(new Date())
	const [onUpdateClass, setOnUpdateClass] = useState<string>('')

	const { wallets, loadWallets } = useContext(GlobalWalletsStore)
	const POOLING_INTERVAL = 1000 * 20

	const webSocketProvider: any = new ethers.providers.WebSocketProvider(WSS_API)

	useEffect(() => {
		if (wallets.length === 0) {
			getWalletsHandler()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getWalletsHandler = async () => {
		const ethWallets = await getWallets()

		loadWallets(ethWallets)
	}

	useEffect(() => {
		let poolingInterval: ReturnType<typeof setInterval> | null = null

		if (wallets.length > 0) {
			getAllBalances()

			poolingInterval = setInterval(async () => {
				await getAllBalances()
			}, POOLING_INTERVAL)
		}

		return () => {
			webSocketProvider.removeAllListeners()
			if (poolingInterval !== null) {
				clearInterval(poolingInterval)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [wallets])

	// Pooling for balances
	const getAllBalances = async () => {
		const allWalletsBalances = wallets.map(async (wallet) => {
			const walletBalances = await Promise.all(
				tokens.map(async (token) => {
					return getBalanceForAddress(
						token.address,
						wallet,
						webSocketProvider,
						token.decimals,
					)
				}),
			)

			return { wallet, balances: [...walletBalances] }
		})
		const results = await Promise.all(allWalletsBalances)
		setWalletsBalances(results)
	}

	// updated UI on balance updated
	useEffect(() => {
		setOnUpdateClass('updated')

		const timeout = setTimeout(() => {
			setOnUpdateClass('')
		}, 2000)

		return () => {
			clearTimeout(timeout)
		}
	}, [walletsBalances])

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
							wallets.map((wallet, i) => (
								<Chip key={i} sx={{ mb: 2 }} label={wallet} />
							))
						) : (
							<p>No wallets</p>
						)}
					</Grid>
					<Divider orientation="vertical" flexItem />
					<Grid item container xs>
						<Typography variant="h6" gutterBottom component="h6"></Typography>
						{walletsBalances.length > 0 &&
							walletsBalances.map((wallet: WalletCardProps) => {
								return (
									<WalletCard
										key={wallet.wallet}
										onUpdateClass={onUpdateClass}
										wallet={wallet}
									/>
								)
							})}
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default App
