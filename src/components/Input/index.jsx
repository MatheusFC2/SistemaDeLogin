import React from 'react'
import * as C from './styles'

export default function Input({ type, placeholder, value, onChange}) {
  return (
    <C.Input
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        type={type}
    />
  )
}
