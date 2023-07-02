import { useState, useEffect, useRef, FocusEvent } from 'react'
import axios, { AxiosError } from "axios";
import Row from '../components/Row'
import Button from '../components/Button'
import { OPERATIONS, OperatorType, ErrorResponse } from '@/types';

// const URL = "http://localhost:8080/calculate"; // Node.js Server
const URL = "/api/calculate"; // Next.js API

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

  const inputElement = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }

  useEffect(() => {
    focusInput()
  }, []);

  useEffect(() => {
    if (operator === null) {
      setFirstNumber(display);
    } else if(!isNewNumber) {
      setSecondNumber(display);
    }
  }, [operator, isNewNumber, display])

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;

    if (!isNaN(parseInt(key))) {
      handleNumberClick(parseInt(key));
    }
    if (key === '.') {
      handleDotClick();
    } else if (key === '+') {
      handleOperatorClick(OPERATIONS.SUM);
    } else if (key === '-') {
      handleOperatorClick(OPERATIONS.SUBTRACT);
    } else if (key === '*') {
      handleOperatorClick(OPERATIONS.MULTIPLY);
    } else if (key === '/') {
      handleOperatorClick(OPERATIONS.DIVIDE);
    } else if (key === '=') {
      handleEqualClick();
    } else if (key === 'Enter') {
      handleEqualClick();
    } else if (key === 'Backspace') {
      handleBackspace();
    } else if (key === 'Delete') {
      reset();
    }
  };

  const handleNumberClick = (number: number) => {
    if (display === "0" || isNewNumber) {
      setDisplay( number.toString() )
      setNewNumber(false)
    } else {
      setDisplay( prev => prev + number)
    }
    focusInput()
  };

  const handleOperatorClick = (op: OperatorType) => {
    if(!isNewNumber) {
      calculate();
    }

    setOperator(op)
    setNewNumber(true)
    focusInput()
  };

  const handleDotClick = () => {
    if (!display.includes(".")) {
      setDisplay( prev => prev + ".");
    }
    focusInput()
  };

  const handleToggleSignClick = () => {
    setDisplay( prev => returnOposite(prev))
    focusInput()
  };

  const handleEqualClick = () => {
    setNewNumber(true)
    calculate()
    focusInput()
  }

  const handleBackspace = () => {
    if(display.length === 1) {
      setDisplay("0")
    } else {
      setDisplay( prev => prev.slice(0, -1));
    }
    focusInput()
  };

  const reset = () => {
    setFirstNumber("")
    setSecondNumber("")
    setOperator(null)
    setDisplay("0")
    focusInput()
  };

  const calculate = async () => {
    if (firstNumber !== "" && secondNumber !== "" && operator !== null) {

      try {
        const requestBody = {
          number1: parseFloat(firstNumber),
          number2: parseFloat(secondNumber),
          operator: operator,
        };

        const response = await axios.post(URL, requestBody);

        setDisplay(response.data.result.toString());
        setFirstNumber(response.data.result.toString());
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const err = error as AxiosError<ErrorResponse>;
          reset();
          setDisplay(err.response?.data.error || "Unknown error occurred");
        }
      }
    }
  };

  const isSelected = (op: OperatorType) => operator === op

  const placeCursorEnd = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='border rounded p-4'>
        <div className='w-44 mb-1'>
          <input
            type='text'
            className='w-full h-10 p-2 text-right text-xl font-mono bg-green-700 text-slate-800 font-bold border rounded'
            value={display}
            onKeyDown={keyDownHandler}
            onFocus={(event) => placeCursorEnd(event)}
            ref={inputElement}
          />
        </div>
        <Row>
          <Button className="col-span-2" title='C' onClick={reset}/>
          <Button title='&#9003;' onClick={handleBackspace}/>
          <Button title='/' isSelected={isSelected(OPERATIONS.DIVIDE)} onClick={() => handleOperatorClick(OPERATIONS.DIVIDE)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='7' onClick={() => handleNumberClick(7)}/>
          <Button className="bg-slate-900" title='8' onClick={() => handleNumberClick(8)}/>
          <Button className="bg-slate-900" title='9' onClick={() => handleNumberClick(9)}/>
          <Button title='*' isSelected={isSelected(OPERATIONS.MULTIPLY)} onClick={() => handleOperatorClick(OPERATIONS.MULTIPLY)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='4' onClick={() => handleNumberClick(4)}/>
          <Button className="bg-slate-900" title='5' onClick={() => handleNumberClick(5)}/>
          <Button className="bg-slate-900" title='6' onClick={() => handleNumberClick(6)}/>
          <Button title='-' isSelected={isSelected(OPERATIONS.SUBTRACT)} onClick={() => handleOperatorClick(OPERATIONS.SUBTRACT)}/>
        </Row>
        <Row>
          <Button className="bg-slate-900" title='1' onClick={() => handleNumberClick(1)}/>
          <Button className="bg-slate-900" title='2' onClick={() => handleNumberClick(2)}/>
          <Button className="bg-slate-900" title='3' onClick={() => handleNumberClick(3)}/>
          <Button title='+' isSelected={isSelected(OPERATIONS.SUM)} onClick={() => handleOperatorClick(OPERATIONS.SUM)}/>
        </Row>
        <Row>
          <Button title='+/-' onClick={handleToggleSignClick}/>
          <Button className="bg-slate-900" title='0' onClick={() => handleNumberClick(0)}/>
          <Button title='.' onClick={handleDotClick}/>
          <Button title='=' onClick={handleEqualClick}/>
        </Row>
      </div>
    </div>
  )
}
