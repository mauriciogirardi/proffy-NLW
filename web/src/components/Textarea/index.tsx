import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
  maxLength: number
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  maxLength,
  ...rest
}) => {
  return (
    <div className='textarea-block'>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} maxLength={maxLength} />
    </div>
  )
}

export default Textarea
