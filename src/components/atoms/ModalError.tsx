import { Alert } from '@mui/material'
import { Box } from '@mui/system'

const ModalError: React.FC<{
	message: string
	type: 'warning' | 'error' | undefined
	dismissError: () => void
}> = ({ message, type, dismissError }) => {
	return (
		<Box sx={{ pl: 3, pr: 3, mb: 3 }}>
			<Alert onClose={dismissError} severity={type}>
				{message}
			</Alert>
		</Box>
	)
}

export default ModalError
