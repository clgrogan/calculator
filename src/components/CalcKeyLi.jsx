import React from 'react'

const CalcKeyLi = props => {
  return (
    <>
      <li id={props.calcKey}>
        <button
          className={'function' + props.calcKey}
          onClick={() => props.calcKeyClicked(props.calcKey)}
          disabled={
            props.calcKey === '()' ||
            props.calcKey === '%' ||
            props.calcKey === '+/-' ||
            props.calcKey === '.'
          }
        >
          {props.calcKey}
        </button>
      </li>
    </>
  )
}

export default CalcKeyLi
