import { Button, TextField, Typography } from '@mui/material'
import { useContext, useEffect, useRef, useState } from 'react'
import { utils } from 'ethers'
import { storeWallets } from '../../utils/storage'
import { Box } from '@mui/system'
import ModalError from '../atoms/ModalError'
import { GlobalWalletsStore } from '../../store/wallets/wallets.store'

type Error = {
	message: string
	type: 'warning' | 'error' | undefined
}

const SubmitWallets: React.FC = () => {
	const { wallets, loadWallets } = useContext(GlobalWalletsStore)
	const [error, setError] = useState<Error | null>(null)
	const textRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (wallets.length > 0) {
			textRef.current!.value = wallets.join('\n')
		}
	}, [wallets])

	const storeWalletsHandler = async (wallets: string[]) => {
		const isStored = await storeWallets(wallets)

		if (isStored) {
			loadWallets(wallets)
		}
	}

	const submitFormHandler = async (event: React.FormEvent) => {
		event.preventDefault()

		const rawWalletString: string = textRef.current!.value

		// if no wallets are entered“
		if (rawWalletString.trim() === '' || rawWalletString.length < 42) {
			setError({
				message: 'Please enter a valid wallet address',
				type: 'error',
			})
			return
		}

		const splitString = rawWalletString.split(/\n/)

		// validate wallets with ethers.js
		const validWallets: string[] = splitString.filter((wallet) => {
			try {
				const walletAddress: string = utils.getAddress(wallet)
				return walletAddress
			} catch (error) {
				return false
			}
		})

		// if no valid wallets, show error
		if (validWallets.length === 0) {
			setError({ message: 'No valid addresses found', type: 'error' })
			return
		}

		// if not all wallets are valid, show warning
		if (validWallets.length < splitString.length) {
			setError({ message: 'Not all addresses are valid', type: 'warning' })
		}

		storeWalletsHandler(validWallets)

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
			<Typography sx={{ p: 3 }} variant="h6" component="h2" gutterBottom>
				Add ETH Wallets
			</Typography>
			<Typography sx={{ pl: 3, pr: 3, mb: 2 }} variant="body1" gutterBottom>
				Please insert your ETH wallet(s) addresses below. <br /> One address per
				line.
			</Typography>

			{error && (
				<ModalError
					message={error.message}
					type={error.type}
					dismissError={handleCloseError}
				/>
			)}

			<form onSubmit={submitFormHandler}>
				<Box sx={{ pl: 3, pr: 3 }}>
					<TextField
						placeholder="Example 0x0000000000000000000000000000000000000000
						..."
						fullWidth
						rows={4}
						sx={{
							border: '0px',
							borderColor: '#becad9',
							borderRadius: '4px',

							background: '#f5f8fa',
						}}
						multiline
						inputProps={{
							sx: {},
							ref: textRef,
						}}
					/>
				</Box>

				<Box
					display="flex"
					justifyContent={'flex-end'}
					alignItems="flex-end"
					sx={{
						mt: 3,
						p: 3,
						flexGrow: 1,
						background: '#f6f8f9',
						borderTop: '1px solid #eaeef3',
					}}
				>
					{/* <Button variant="outlined" disableElevation sx={{ mr: 3 }}>
						Close
					</Button> */}
					<Button type="submit" variant="contained" disableElevation>
						Update Wallets
					</Button>
				</Box>
			</form>
		</>
	)
}

export default SubmitWallets
