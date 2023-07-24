import React from 'react'
import styles from './Radio.module.scss'

function Radio({label,value,disabled,onChange}) {
  return (
    <div>
    <div className="form-check">
      <input type="radio" value={value} disabled={disabled} className={`${styles['form-check-input']}`}/>
      <label className={`${styles['form-check-label']}`}>{label}</label>
    </div>
    </div>
  )
}

export default Radio
