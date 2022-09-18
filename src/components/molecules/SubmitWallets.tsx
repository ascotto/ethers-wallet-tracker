import { Alert, Button, TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { utils } from 'ethers'
import { isWalletAddress, WalletAddress } from '../../utils'

const SubmitWallets: React.FC = () => {
	const [wallets, setWallets] = useState<string[]>([])
	const [error, setError] = useState<string | null>(null)

	const textRef = useRef<HTMLInputElement>(null)

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault()

		const rawWalletString: string = textRef.current!.value

		if (rawWalletString.trim() === '' || rawWalletString.length < 42) {
			setError('Please enter a valid wallet address')
			return
		}

		const splitString = rawWalletString.split(/\n/)

		// validate wallets with ethers.js
		const validWallets: string[] = splitString.filter((wallet) => {
			try {
				const walletAddress: string = utils.getAddress(wallet)
				return walletAddress
			} catch (error) {
				setError('Not all addresses are valid')
				return false
			}
		})

		setWallets(validWallets)

		// clear error
		if (validWallets.length === splitString.length) {
			setError(null)
		}
	}

	const handleCloseError = () => {
		setError(null)
	}

	return (
		<>
			Wallets:{' '}
			{wallets.length > 0 &&
				wallets.map((wallet) => <div key={'id_' + wallet}>{wallet}</div>)}
			<form onSubmit={submitFormHandler}>
				<label>Label</label>
				<TextField multiline inputProps={{ ref: textRef }} />

				<Button type="submit">Add Wallets</Button>
			</form>
			{error && (
				<Alert severity="error">
					{error} <button onClick={handleCloseError}>x</button>
				</Alert>
			)}
		</>
	)
}

export default SubmitWallets
