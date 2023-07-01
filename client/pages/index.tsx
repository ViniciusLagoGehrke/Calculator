import { useState, useEffect } from 'react'
import Row from '../components/Row'
import Button from '../components/Button'

const OPERATORS = {
  Addition: "+",
  Subtraction: "-",
  Multiplication: "*",
  Division: "/",
} as const

type OperatorType = typeof OPERATORS[keyof typeof OPERATORS];


type HandleInputProps = {
  value: OperatorType | number
}

export default function Home() {
  const [displayValue, setDisplayValue] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number: number) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + number);
  };

  const handleOperatorClick = (operator: OperatorType) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + operator);
  };

  const handleDotClick = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + ".");
    }
  };

  const handleEqualClick = () => {
    try {
      const calculatedResult = eval(displayValue);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <div className='border rounded p-4'>
        <Row>
          <div>Result: {result}</div>
        </Row>
        <Row>
          <input
            type='text'
            className='w-44 h-10 p-2 text-right font-mono bg-green-700 text-slate-800 font-bold border rounded m-1'
            value={displayValue}
            readOnly
          />
        </Row>
        <Row>
          <Button title='7' onClick={() => handleNumberClick(7)}/>
          <Button title='8' onClick={() => handleNumberClick(8)}/>
          <Button title='9' onClick={() => handleNumberClick(9)}/>
          <Button title='/' onClick={() => handleOperatorClick(OPERATORS.Division)}/>
        </Row>
        <Row>
          <Button title='4' onClick={() => handleNumberClick(4)}/>
          <Button title='5' onClick={() => handleNumberClick(5)}/>
          <Button title='6' onClick={() => handleNumberClick(6)}/>
          <Button title='*' onClick={() => handleOperatorClick(OPERATORS.Multiplication)}/>
        </Row>
        <Row>
          <Button title='1' onClick={() => handleNumberClick(1)}/>
          <Button title='2' onClick={() => handleNumberClick(2)}/>
          <Button title='3' onClick={() => handleNumberClick(3)}/>
          <Button title='-' onClick={() => handleOperatorClick(OPERATORS.Subtraction)}/>
        </Row>
        <Row>
          <Button title='.' onClick={() => handleDotClick()}/>
          <Button title='0' onClick={() => handleNumberClick(0)}/>
          <Button title='=' onClick={() => handleEqualClick()}/>
          <Button title='+' onClick={() => handleOperatorClick(OPERATORS.Addition)}/>
        </Row>
      </div>
    </main>
  )
}
