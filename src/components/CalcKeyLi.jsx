import React from 'react'

const CalcKeyLi = props => {
  // const numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
  return (
    <>
      <li id={props.calcKey}>
        <button
          className={'function' + props.calcKey}
          onClick={() => props.calcKeyClicked(props.calcKey)}
          disabled={
            props.calcKey === '()' ||
            props.calcKey === '%' ||
            props.calcKey === '+/-'
          }
        >
          {props.calcKey}
        </button>
      </li>
    </>
  )
}

export default CalcKeyLi
