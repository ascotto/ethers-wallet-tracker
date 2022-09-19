import { Close } from '@mui/icons-material'
import { IconButton, Modal, Paper } from '@mui/material'

const modalWrapperStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 520,
	boxShadow: 24,
	overflow: 'hidden' as 'hidden',
}

const closeButtonStyle = {
	position: 'absolute',
	top: 0,
	right: 0,
	color: '#DD2C2C',
}

const GeneralModal: React.FC<{
	toggleModal: boolean
	handleModal: () => void
	children: JSX.Element
}> = ({ toggleModal, handleModal, children }) => {
	return (
		<Modal
			open={toggleModal}
			onClose={handleModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Paper sx={modalWrapperStyle}>
				<IconButton sx={closeButtonStyle} onClick={handleModal}>
					<Close />
				</IconButton>
				{children}
			</Paper>
		</Modal>
	)
}

export default GeneralModal
