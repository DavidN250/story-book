import React from 'react'
import styles from './Row.module.scss'

function Row() {
  return (
    <>
 <table className="table table-striped">
   <tbody>
   <tr className={`${styles['odd']}`}>
      <td>Jul 20, 2023 3:41 PM</td>
      <td>
        <div style={{minWidth: 100}}>
          <a className="btn btn-tertiary btn-icon-standalone" style={{flex: 1, color: '#0678f7', marginRight: 10, display: 'inline-block'}} href="/vehicles/162/smartcar/lock">
            <i className="fa fa-lock" />
          </a>
          <a className="btn btn-tertiary btn-icon-standalone" style={{flex: 1, color: '#0678f7', display: 'inline-block'}} href="/vehicles/162/smartcar/unlock">
            <i className="fa fa-unlock" />
          </a>
        </div>
      </td>
      <td>
        <div className="dropdown">
          <button className="btn btn-tertiary btn-icon dropdown-rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-bolt" />
            Not Charging
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/vehicles/162/smartcar/start-charge">Start Charge</a>
            </li>
            <li>
              <a className="dropdown-item" href="/vehicles/162/smartcar/stop-charge">Stop Charge</a>
            </li>
          </ul>
        </div>
      </td>
      <td>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actions
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/vehicles/162/">View</a>
            </li>
            <li>
              <a className="dropdown-item" href="/vehicles/162/smartcar/sync">Sync</a>
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