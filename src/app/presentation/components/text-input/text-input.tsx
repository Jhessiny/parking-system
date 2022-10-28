import React from 'react'
import { clsx } from 'clsx'
import styles from './text-input.module.scss'
import { useFormContext } from 'react-hook-form'

type Props = React.InputHTMLAttributes<HTMLInputElement> & { wrapperClass?: string; label: string }

export const TextInput = ({ className, name = '', label, wrapperClass, ...rest }: Props) => {
  const { register } = useFormContext()
  return (
    <div className={wrapperClass}>
      <label className={styles.label}>{label}</label>
      <input className={clsx(styles.input, className)} {...register(name)} name={name} {...rest} />
    </div>
  )
}
