import React, { InputHTMLAttributes, useCallback } from 'react'

import './styles.css'
import { currency, phone } from 'components/Masks'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  mask?: 'currency' | 'phone'
}

const Input: React.FC<InputProps> = ({ label, name, mask, ...rest }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'currency') currency(e)
      if (mask === 'phone') phone(e)
    },
    [mask]
  )

  return (
    <div className='input-block'>
      <label htmlFor={name}>{label}</label>
      <input type='text' id={name} {...rest} onKeyUp={handleKeyUp} />
    </div>
  )
}

export default Input
