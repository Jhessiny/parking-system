import React from 'react'
import { clsx } from 'clsx'
import styles from './button.module.scss'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { variant?: string }

export const Button = ({ className, variant = 'normal', ...rest }: Props) => {
  return <button className={clsx(styles.button, styles[variant], className)} {...rest} />
}
