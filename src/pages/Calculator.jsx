import React, { useState } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import CalcKeyLi from '../components/CalcKeyLi.jsx'

const Calculator = () => {
  const calcKeys = 'C () % / 1 8 9 x 4 5 6 - 1 2 3 + +/- 0 . ='.split(' ')

  const [displayValue, setDisplayValue] = useState('0')
  let prevEntry = ''

  const calcKeyClicked = calcKey => {
    console.log('Button clicked value: ', calcKey)
    if (displayValue == 0 && calcKey >= '0' && calcKey <= '9') {
      setDisplayValue = calcKey
    }
  }
  return (
    <>
      <KeyboardEventHandler
        handleKeys={[...calcKeys]}
        onKeyEvent={(key, e) =>
          console.log(`do something upon keydown event of ${key}`)
        }
      />

      <main className="mainSection">
        <p className="display">{displayValue}</p>
        <section className="keyPadSection">
          <ul>
            {calcKeys.map((calcKey, index) => {
              return (
                <CalcKeyLi
                  key={index}
                  calcKey={calcKey}
                  calcKeyClicked={calcKeyClicked}
                />
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Calculator
