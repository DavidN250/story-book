import { useState } from 'react';
import styles from './Dropdown.module.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";





function Dropdown({icon,selected,disabled,onChange}) {
  const userStyle = { color: "blue", fontSize: "1.5em" }
  const selecteStyle = { borderRadius: "1.5em" }
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)

  return (
    <div className={`${styles['dropdown']}`} >
          <button className={
            `${styles['btn']} 
             ${styles['dropdown-rounded']} 
             ${styles['dropdown-toggle']} 
             ${styles['btn-icon']} 
             ${disabled ? styles['btn-disabled']:null}`}
             onClick={()=>(setShowDropdownMenu(!showDropdownMenu))}
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
            {icon ? <FaUserCircle style={userStyle} /> : selected ? <span>Action</span>: disabled?<span>Dropdown button</span>:<span>Dropdown button</span>}<MdOutlineKeyboardArrowDown />
          </button>
          <ul className={`${styles['dropdown-menu']} ${icon ? styles['icon-margin']:''} ${!showDropdownMenu?styles['dropdown-hidden']:null}`}>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="#">Action</a>
            </li>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="#">Another action</a>
            </li>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="#">Something else here</a>
            </li>
          </ul>
        </div>
  )
}

export default Dropdown