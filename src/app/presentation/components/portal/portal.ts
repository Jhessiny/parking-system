import { createPortal } from 'react-dom'
import React, { ReactPortal } from 'react'

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

interface Props {
  children: React.ReactNode
  wrapperId?: string
}

export const Portal = ({ children, wrapperId = 'portal' }: Props): ReactPortal => {
  let element = document.getElementById(wrapperId)

  if (!element) element = createWrapperAndAppendToBody(wrapperId)

  return createPortal(children, element)
}
