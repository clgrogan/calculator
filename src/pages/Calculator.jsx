import React, { useState } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import CalcKeyLi from '../components/CalcKeyLi.jsx'
import Display from '../components/Display.jsx'

const Calculator = () => {
  const calcKeys = 'C () % / 1 8 9 * 4 5 6 - 1 2 3 + +/- 0 . ='.split(' ')
  const zeroToNine = '0123456789'
  const operands = '/*-+'

  const [displayValue, setDisplayValue] = useState('0')
  const [firstNumber, setFirstNumber] = useState(0)
  const [calcState, setCalcState] = useState('new')
  const [operand, setOperand] = useState('')

  const calcKeyClicked = calcKey => {
    console.log('Button clicked value: ', calcKey)
    // If the value was already calculated,  then reset the calculator
    if (calcState === 'calculated') {
      debugger
      clearVariables()
    }
    // debugger
    if (calcKey === 'C') {
      clearVariables()
    } else if (
      zeroToNine.includes(calcKey) &&
      (displayValue === '0' || calcState === 'needSecondNumber')
    ) {
      setDisplayValue(calcKey)
      if (calcState === 'needSecondNumber') {
        setCalcState('readyToCalculate')
      }
    } else if (zeroToNine.includes(calcKey)) {
      setDisplayValue(prevValue => {
        return prevValue + calcKey
      })
    } else if (operands.includes(calcKey) && calcState === 'new') {
      setOperand(calcKey)
      // debugger
      setFirstNumber(parseInt(displayValue))
      setCalcState('needSecondNumber')
    } else if (calcKey === '=' && calcState === 'readyToCalculate') {
      calcResult()
    }
  }

  const clearVariables = () => {
    setOperand('')
    setFirstNumber(0)
    setDisplayValue('0')
    setCalcState('new')
  }

  const calcResult = () => {
    debugger
    let result = 0
    switch (operand) {
      case '/':
        // perform division
        result = firstNumber / parseInt(displayValue)
        break
      case '*':
        // perform division
        result = firstNumber * parseInt(displayValue)
        break
      case '-':
        // perform division
        result = firstNumber - parseInt(displayValue)
        break
      case '+':
        // perform division
        result = firstNumber + parseInt(displayValue)
        break
      default:
      // Do nothing
    }
    console.log('Did we get a result? ', result)
    setDisplayValue(result)
    setCalcState('calculated')
  }

  // Do HTML Return Stuff below here
  return (
    <>
      <KeyboardEventHandler
        handleKeys={[...calcKeys]}
        onKeyEvent={(key, e) =>
          console.log(`do something upon keydown event of ${key}`)
        }
      />

      <main>
        <section className="mainSection">
          <Display key={'1'} displayValue={displayValue} />
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
        </section>
      </main>
    </>
  )
}
export default Calculator
