import { BasicModal } from '~/app/presentation/components/modal/modal'
import styles from './unpark-modal.module.scss'

interface Props {
  isOpen: boolean
  handleClose: () => void
}

export const UnparkModal = ({ handleClose, isOpen }: Props) => {
  const handleConfirm = (id: string) => console.log('unparking...')
  return (
    <BasicModal isOpen={isOpen} handleClose={handleClose}>
      <h1>You want to unpark your car?</h1>
      <button onClick={() => handleConfirm('id')}>confirm</button>
      <button onClick={handleClose}>cancel</button>
    </BasicModal>
  )
}
