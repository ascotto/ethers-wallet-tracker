import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/system'
import { ui } from '../../constants/ui'

const AppTopBar: React.FC = () => {
	const openModalHandler: () => void = () => {
		alert('open dialog')
	}

	return (
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
						textAlign={'left'}
						component="div"
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
	)
}

export default AppTopBar
