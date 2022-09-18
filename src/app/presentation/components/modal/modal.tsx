import React from 'react'
import ReactModal from 'react-modal'
import { Portal } from '../portal/portal'

interface Props {
  isOpen: boolean
}

export const BasicModal = ({ isOpen }: Props) => {
  return (
    <Portal>
      <ReactModal isOpen={isOpen} contentLabel='hey'>
        <h1>Modal</h1>
      </ReactModal>
    </Portal>
  )
}
