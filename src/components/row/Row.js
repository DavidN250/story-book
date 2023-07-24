/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IoLockOpen } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import styles from './Row.module.scss'

function Row() {

    const iconStyle = { color: "blue", fontSize: "1.2em" }
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
          <button className={`${styles['btn']} ${styles['dropdown-rounded']} ${styles['btn-icon']} ${styles['dropdown-toggle']}   btn-tertiary`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-bolt" />
           <GiElectric /> <span>Not Charging </span><MdOutlineKeyboardArrowDown />
          </button>
          <ul className={`${styles['dropdown-menu']}`}>
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
          <button className={`${styles['btn']} ${styles['dropdown-rounded']} ${styles['dropdown-toggle']}   btn-tertiary btn-icon`}  type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actions <MdOutlineKeyboardArrowDown />
          </button>
          <ul className={`${styles['dropdown-menu']}`}>
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