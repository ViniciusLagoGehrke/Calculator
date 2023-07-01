import { useState, useEffect } from 'react'
import axios from "axios";
import Row from '../components/Row'
import Button from '../components/Button'

const OPERATORS = {
  SUM: 'SUM',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE'
} as const

type OperatorType = typeof OPERATORS[keyof typeof OPERATORS];

type HandleInputProps = {
  value: OperatorType | number
}

const returnOposite = (value: string) => {
  const parsed = parseInt(value)
  if (isNaN(parsed)) return value

  return (parsed * -1).toString()
}

export default function Home() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState<OperatorType | null>(null);
  const apiUrl = "http://localhost:8080/calculate";

  const handleNumberClick = (number: number) => {
    if (operator === null) {
      setFirstNumber((prevFirstNumber) => prevFirstNumber + number);
    } else {
      setSecondNumber((prevSecondNumber) => prevSecondNumber + number);
    }
  };

  const handleOperatorClick = (op: OperatorType) => {
    if (firstNumber !== "" && secondNumber === "") {
      setOperator(op);
    }
  };

  const handleDotClick = () => {
    if (operator === null && !firstNumber.includes(".")) {
      setFirstNumber((prevFirstNumber) => prevFirstNumber + ".");
    } else if (operator !== null && !secondNumber.includes(".")) {
      setSecondNumber((prevSecondNumber) => prevSecondNumber + ".");
    }
  };

  const handleToggleSignClick = () => {
    if (firstNumber !== "" && secondNumber === "") {
      setFirstNumber( prev => returnOposite(prev) )
    } else {
      setSecondNumber( prev => returnOposite(prev) )
    }
  };

  const handleEqualClick = async () => {
    if (firstNumber !== "" && secondNumber !== "" && operator !== null) {
      try {
        const requestBody = {
          number1: parseFloat(firstNumber),
          number2: parseFloat(secondNumber),
          operator: operator,
        };

        const response = await axios.post(apiUrl, requestBody);
        setSecondNumber("")
        setFirstNumber(response.data.result.toString());
      } catch (error) {
        setSecondNumber("")
        setFirstNumber("Error");
      }
    }
  };
  
  const handleBackspace = () => {
    if (operator === null) {
      setFirstNumber((prevFirstNumber) => prevFirstNumber.slice(0, -1));
    } else {
      setSecondNumber((prevSecondNumber) => prevSecondNumber.slice(0, -1));
    }
  };

  const clearDisplay = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator(null);
  };

  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <div className='border rounded p-4'>
        <Row>
          <input
            type='text'
            className='col-span-4 h-10 p-2 text-right font-mono bg-green-700 text-slate-800 font-bold border rounded'
            value={secondNumber || firstNumber}
            readOnly
          />
        </Row>
        <Row>
          <Button className="col-span-2" title='C' onClick={() => clearDisplay()}/>
          <Button title='<X' onClick={() => handleBackspace()}/>
          <Button title='/' onClick={() => handleOperatorClick(OPERATORS.DIVIDE)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='7' onClick={() => handleNumberClick(7)}/>
          <Button className="bg-slate-900" title='8' onClick={() => handleNumberClick(8)}/>
          <Button className="bg-slate-900" title='9' onClick={() => handleNumberClick(9)}/>
          <Button title='*' onClick={() => handleOperatorClick(OPERATORS.MULTIPLY)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='4' onClick={() => handleNumberClick(4)}/>
          <Button className="bg-slate-900" title='5' onClick={() => handleNumberClick(5)}/>
          <Button className="bg-slate-900" title='6' onClick={() => handleNumberClick(6)}/>
          <Button title='-' onClick={() => handleOperatorClick(OPERATORS.SUBTRACT)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='1' onClick={() => handleNumberClick(1)}/>
          <Button className="bg-slate-900" title='2' onClick={() => handleNumberClick(2)}/>
          <Button className="bg-slate-900" title='3' onClick={() => handleNumberClick(3)}/>
          <Button title='+' onClick={() => handleOperatorClick(OPERATORS.SUM)}/>
        </Row>
        <Row>
          <Button title='+/-' onClick={() => handleToggleSignClick()}/>
          <Button title='.' onClick={() => handleDotClick()}/>
          <Button className="bg-slate-900" title='0' onClick={() => handleNumberClick(0)}/>
          <Button className="col-span-2" title='=' onClick={() => handleEqualClick()}/>
        </Row>
      </div>
    </main>
  )
}
