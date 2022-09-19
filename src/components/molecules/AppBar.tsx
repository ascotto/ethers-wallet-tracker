import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/system'
import AddWalletsModal from './AddWalletsModal'
import { useState } from 'react'

const AppTopBar: React.FC = () => {
	const [toggleModal, setToggleModal] = useState<boolean>(false)

	const openModalHandler: () => void = () => {
		setToggleModal((prevState) => !prevState)
	}

	return (
		<>
			<AddWalletsModal
				toggleModal={toggleModal}
				handleClose={openModalHandler}
			/>

			<AppBar
				position="static"
				sx={{
					background: '#fff',
					color: 'grey.700',
					boxShadow: '0 4px 48px rgba(0,0,0,.14)',
				}}
			>
				<Container maxWidth="xl">
					<Toolbar>
						<Typography
							variant="h6"
							textAlign="left"
							component="h6"
							sx={{ flexGrow: 1 }}
						>
							Wallet tracker
						</Typography>
						<Button
							onClick={openModalHandler}
							color="primary"
							disableElevation
							variant="contained"
						>
							Add ETH Wallets
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}

export default AppTopBar
