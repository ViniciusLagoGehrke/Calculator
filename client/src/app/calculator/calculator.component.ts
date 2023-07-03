import { Component, HostListener } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { OperatorType, ERROR_MESSAGE, SYMBOL_MAP, ErrorType } from 'src/types';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  constructor(private calculatorService: CalculatorService) {}

  title = 'calculator';

  display: string = '0';

  isNewNumber = true;

  firstNumber: string = '';
  secondNumber: string = '';
  operator: OperatorType | null = null;

  @HostListener('window:keydown', ['$event'])
  keyDownHandler(event: KeyboardEvent): void {
    event.preventDefault();
    const key = event.key;

    if (!isNaN(parseInt(key))) {
      this.handleNumberClick(parseInt(key));
    } else if (key === '.') {
      this.handleDotClick();
    } else if (key === 'F9') {
      // +/- button
      this.handleToggleSignClick();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      this.handleOperatorClick(SYMBOL_MAP[key]);
    } else if (key === 'Enter') {
      this.handleEqualClick();
    } else if (key === '=') {
      this.handleEqualClick();
    } else if (key === 'Backspace') {
      this.handleBackspace();
    } else if (key === 'Delete') {
      this.reset();
    }
  }

  updateNumbers(): void {
    if (this.operator === null) {
      this.firstNumber = this.display;
    } else if (!this.isNewNumber) {
      this.secondNumber = this.display;
    }
  }

  handleNumberClick(number: number): void {
    if (this.display === '0' || this.isNewNumber) {
      this.display = number.toString();
    } else {
      this.display += number.toString();
    }
    this.isNewNumber = false;
  }

  handleOperatorClick(operator: OperatorType): void {
    this.updateNumbers();
    if (this.firstNumber !== '') {
      if (!this.isNewNumber) {
        this.calculate();
      }
      this.operator = operator;
      this.isNewNumber = true;
    }
  }

  handleDotClick(): void {
    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  handleToggleSignClick(): void {
    const parsed = parseInt(this.display);
    if (isNaN(parsed)) return;

    this.display = (parsed * -1).toString();
  }

  handleEqualClick(): void {
    this.updateNumbers();
    this.calculate();
    this.isNewNumber = true;
  }

  handleBackspace(): void {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }

  calculate(): void {
    if (
      this.firstNumber !== '' &&
      this.secondNumber !== '' &&
      this.operator !== null
    ) {
      const number1 = parseFloat(this.firstNumber);
      const number2 = parseFloat(this.secondNumber);
      const operator = this.operator;

      if (isNaN(number1) || isNaN(number2)) {
        console.error(ERROR_MESSAGE.Invalid_Parameter);
        this.display = ERROR_MESSAGE.Invalid_Parameter;
        return;
      }

      this.calculatorService.calculate(
        number1,
        number2,
        operator
      ).subscribe({
        next: (response) => {
          console.log(response)
          this.display = response.result.toString()
          this.firstNumber = response.result.toString()
        },
        error: ({ error }) => {
          console.error(error.error)
          this.display = error.error
          this.firstNumber = ''
          this.isNewNumber = true
          this.operator = null
        }
      });
    }
  }

  reset(): void {
    this.display = '0';
    this.firstNumber = '';
    this.secondNumber = '';
    this.isNewNumber = true;
    this.operator = null;
  }
}
