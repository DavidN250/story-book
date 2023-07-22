import React from 'react'
import PropTypes from "prop-types";
import styles from "./Checkbox.module.scss"

export function Checkbox({label,value,disabled,onClick}) {

  return (
    <div>
      <div class="form-check">
        <input 
           type="checkbox" 
           id="flexCheckDisabled" 
           className={`${styles['form-check-input']}`} 
           value={value} 
           disabled={disabled}  
           onClick={onClick}
        />
      <label for="flexCheckDisabled" className={`${styles['form-check-label']}`}>{label}</label>
      </div>
    </div>
  )
}


Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value:PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

// export default Checkbox
