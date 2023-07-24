import React from 'react'
import styles from './Dropdown.module.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
function Dropdown({icon,selected,disabled,onChange}) {
  const userStyle = { color: "blue", fontSize: "1.5em" }
  return (
    <div className={`${styles['dropdown']}`} >
          <a disabled={disabled} className={`${styles['btn']} ${styles['dropdown-rounded']} ${styles['dropdown-toggle']} ${styles[' btn-icon']} btn-tertiary`}  type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {icon ? <FaUserCircle style={userStyle} /> : selected ? <span>Action</span>: <span>Dropdown button </span>}<MdOutlineKeyboardArrowDown />
          </a>
          <ul className={`${styles['dropdown-menu']} ${icon ? styles['icon-margin']:''}`}>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="/vehicles/162/">Action</a>
            </li>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="/vehicles/162/smartcar/sync">Another action</a>
            </li>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="/vehicles/162/smartcar/sync">Something else here</a>
            </li>
          </ul>
        </div>
  )
}

export default Dropdown