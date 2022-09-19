import GeneralModal from '../atoms/GeneralModal'
import { createPortal } from 'react-dom'
import SubmitWallets from './SubmitWallets'

const AddWalletsModal: React.FC<{
	toggleModal: boolean
	handleClose: () => void
}> = ({ toggleModal, handleClose }) => {
	return (
		<>
			{createPortal(
				<GeneralModal toggleModal={toggleModal} handleModal={handleClose}>
					<>
						<SubmitWallets />
					</>
				</GeneralModal>,
				document.getElementById('modal-root') as HTMLElement,
			)}
		</>
	)
}

export default AddWalletsModal
