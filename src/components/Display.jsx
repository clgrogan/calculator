import React from 'react'

const Display = props => {
  return (
    <>
      <input
        className="display"
        value={props.displayValue}
        text-align="right"
        readOnly
      ></input>
    </>
  )
}

export default Display
