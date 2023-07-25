/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { IoLockOpen } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import styles from './Row.module.scss'

function Row() {

    const iconStyle = { color: "#0678f7", fontSize: "1.2em" }
    const [nc_showDropdownMenu, nc_setShowDropdownMenu] = useState(false)
    const [act_showDropdownMenu, act_setShowDropdownMenu] = useState(false)
  return (
    <>
 <table className="table table-striped">
   <tbody>
   <tr className={`${styles['odd']}`}>
      <td>Jul 20, 2023 3:41 PM</td>
      <td>
        <div style={{minWidth: 100}}>
          <a className={`${styles['btn']} ${styles['btn-rounded']} btn-tertiary btn-icon-standalone`} style={{flex: 1, color: '#0678f7', marginRight: 10, display: 'inline-block'}} href="/vehicles/162/smartcar/lock">
            <IoLockClosed style={iconStyle} />
          </a>
          <a className={`${styles['btn']} ${styles['btn-rounded']} btn-tertiary btn-icon-standalone`} style={{flex: 1, color: '#0678f7', display: 'inline-block'}} href="/vehicles/162/smartcar/unlock">
            <IoLockOpen style={iconStyle} />
          </a>
        </div>
      </td>
      <td>
        <div className={`${styles['dropdown']}`} >
          <button className={`
              ${styles['btn']} ${styles['dropdown-rounded']} 
              ${styles['btn-icon']} ${styles['dropdown-toggle']}
              ${nc_showDropdownMenu?styles['dropdown-selected']:null}`} 
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false" 
              onClick={()=>(nc_setShowDropdownMenu(!nc_showDropdownMenu))}>
            <i className="fas fa-bolt"/>
           <GiElectric /> <span>Not Charging {nc_showDropdownMenu ? <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}</span>
          </button>
          <ul className={`${styles['dropdown-menu']} ${!nc_showDropdownMenu? styles['dropdown-hidden']:null}`}>
            <li>
              <a className={`${styles['dropdown-item']}`} href="/vehicles/162/smartcar/start-charge">Start Charge</a>
            </li>
            <li>
              <a className={`${styles['dropdown-item']}`} href="/vehicles/162/smartcar/stop-charge">Stop Charge</a>
            </li>
          </ul>
        </div>
      </td>
      <td>
        <div className={`${styles['dropdown']}`} >
          <button className={`
              ${styles['btn']} 
              ${styles['dropdown-rounded']} 
              ${styles['dropdown-toggle']} 
              ${act_showDropdownMenu?styles['dropdown-selected-colored']:null}`}  
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              onClick={()=>(act_setShowDropdownMenu(!act_showDropdownMenu))}>
            Actions {act_showDropdownMenu ? <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown />}
          </button>
          <ul className={`${styles['dropdown-menu']} ${!act_showDropdownMenu? styles['dropdown-hidden']:null}`}>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="/vehicles/162/">View</a>
            </li>
            <li>
              <a className={`${styles['dropdown-item']}`}  href="/vehicles/162/smartcar/sync">Sync</a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  </tbody></table>

    </>
  )
}

export default Row