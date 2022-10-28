import React from 'react'
import ReactModal from 'react-modal'
import { Portal } from '../portal/portal'
import styles from './modal.module.scss'

interface Props {
  isOpen: boolean
  children: React.ReactNode
  handleClose: (values?: any) => void
}

export const BasicModal = ({ isOpen, children, handleClose }: Props) => {
  return (
    <Portal>
      <ReactModal
        isOpen={isOpen}
        contentLabel='hey'
        className={styles.modal}
        overlayClassName={styles.overlay}
        shouldCloseOnOverlayClick={true}
      >
        <span className={styles.close} onClick={handleClose}>
          &#10006;
        </span>
        {children}
      </ReactModal>
    </Portal>
  )
}
