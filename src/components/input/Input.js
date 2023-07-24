import React from 'react'
import styles from './Input.module.scss'

function Input({placeholder,type,disabled,onChange}) {
  return (
    <>
    <input 
        type={type} 
        name="" 
        placeholder={placeholder} 
        disabled={disabled} 
        id="" 
        className={`${styles['form-control']}`} 
        onChange={onChange} 
        />
    </>
  )
}

export default Input