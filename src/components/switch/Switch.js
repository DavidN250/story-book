import React from 'react'

function Switch({label}) {
  return (
    <div>
        <div class="form-check form-switch">
        <input type="checkbox" value="" role="switch" id="" class="form-check-input"/>
        <label for="">{label}</label>
    </div>
    </div>
  )
}

export default Switch