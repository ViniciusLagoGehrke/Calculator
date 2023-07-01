import { useState, useEffect } from 'react'
import axios from "axios";
import Row from '../components/Row'
import Button from '../components/Button'

const URL = "http://localhost:8080/calculate";

const OPERATIONS = {
  SUM: 'SUM',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE'
} as const

type OperatorType = typeof OPERATIONS[keyof typeof OPERATIONS];

const returnOposite = (value: string) => {
  const parsed = parseInt(value)
  if (isNaN(parsed)) return value

  return (parsed * -1).toString()
}

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [isNewNumber, setNewNumber] = useState(true);
  const [operator, setOperator] = useState<OperatorType | null>(null);

  useEffect(() => {
    if (operator === null) {
      setFirstNumber(display);
    } else if(!isNewNumber) {
      setSecondNumber(display);
    }
  }, [operator, isNewNumber, display])

  const handleNumberClick = (number: number) => {
    if (display === "0" || isNewNumber) {
      setDisplay( number.toString() )
      setNewNumber(false)
    } else {
      setDisplay( prev => prev + number)
    }
  };

  const handleOperatorClick = (op: OperatorType) => {
    if(!isNewNumber) {
      calculate();
    }

    setOperator(op)
    setNewNumber(true)
  };

  const handleDotClick = () => {
    if (!display.includes(".")) {
      setDisplay( prev => prev + ".");
    }
  };

  const handleToggleSignClick = () => {
    setDisplay( prev => returnOposite(prev) )
  };

  const handleEqualClick = () => {
    setNewNumber(true)
    calculate()
  }

  const calculate = async () => {
    if (firstNumber !== "" && secondNumber !== "" && operator !== null) {
      try {
        const requestBody = {
          number1: parseFloat(firstNumber),
          number2: parseFloat(secondNumber),
          operator: operator,
        };

        const response = await axios.post(URL, requestBody);
        if (response.data.error) {
          setDisplay(response.data.error);
        } else {
          setDisplay(response.data.result.toString());
          setFirstNumber(response.data.result.toString());
        }
      } catch (error) {
        reset()
        setDisplay("Error, no connection!");
      }
    }
  };
  
  const handleBackspace = () => {
    if(display.length === 1) {
      setDisplay("0")
    } else {
      setDisplay( prev => prev.slice(0, -1));
    }
  };

  const reset = () => {
    setFirstNumber("")
    setSecondNumber("")
    setOperator(null)
    setDisplay("0")
  };

  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <div className='border rounded p-4'>
        <Row>
          <input
            type='text'
            className='col-span-4 h-10 p-2 text-right font-mono bg-green-700 text-slate-800 font-bold border rounded'
            value={display}
            readOnly
          />
        </Row>
        <Row>
          <Button className="col-span-2" title='C' onClick={() => reset()}/>
          <Button title='&#9003;' onClick={() => handleBackspace()}/>
          <Button title='/' isSelected={operator === OPERATIONS.DIVIDE} onClick={() => handleOperatorClick(OPERATIONS.DIVIDE)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='7' onClick={() => handleNumberClick(7)}/>
          <Button className="bg-slate-900" title='8' onClick={() => handleNumberClick(8)}/>
          <Button className="bg-slate-900" title='9' onClick={() => handleNumberClick(9)}/>
          <Button title='*' isSelected={operator === OPERATIONS.MULTIPLY} onClick={() => handleOperatorClick(OPERATIONS.MULTIPLY)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='4' onClick={() => handleNumberClick(4)}/>
          <Button className="bg-slate-900" title='5' onClick={() => handleNumberClick(5)}/>
          <Button className="bg-slate-900" title='6' onClick={() => handleNumberClick(6)}/>
          <Button title='-' isSelected={operator === OPERATIONS.SUBTRACT} onClick={() => handleOperatorClick(OPERATIONS.SUBTRACT)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='1' onClick={() => handleNumberClick(1)}/>
          <Button className="bg-slate-900" title='2' onClick={() => handleNumberClick(2)}/>
          <Button className="bg-slate-900" title='3' onClick={() => handleNumberClick(3)}/>
          <Button title='+' isSelected={operator === OPERATIONS.SUM} onClick={() => handleOperatorClick(OPERATIONS.SUM)}/>
        </Row>
        <Row>
          <Button title='+/-' onClick={() => handleToggleSignClick()}/>
          <Button className="bg-slate-900" title='0' onClick={() => handleNumberClick(0)}/>
          <Button title='.' onClick={() => handleDotClick()}/>
          <Button title='=' onClick={() => handleEqualClick()}/>
        </Row>
      </div>
    </main>
  )
}
