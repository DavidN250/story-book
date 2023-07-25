import React, { useState } from 'react'
import styles from './Switch.module.scss'

function Switch({label,onChange}) {
  const [isOn,setIsOn]= useState(false)
  return (
    <div className={`${styles['form-check']}`}>
   <label className={`${styles['form-switch']}`}>
    <input type="checkbox" onChange={onChange} onClick={()=>(setIsOn(!isOn))}/>
   <span className={`${styles['slider']} ${styles['round']}`}></span>
  </label>
  <label htmlFor="">{isOn?'On':label}</label>
</div>
  )
}

export default Switch