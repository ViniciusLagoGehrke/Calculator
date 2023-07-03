import { Injectable } from '@angular/core';
import { OPERATIONS, OperatorType, ERROR_MESSAGE, ErrorType } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  calculate(
    number1: number,
    number2: number,
    operator: OperatorType
  ): number | ErrorType {
    switch (operator) {
      case OPERATIONS.SUM:
        return number1 + number2;
      case OPERATIONS.SUBTRACT:
        return number1 - number2;
      case OPERATIONS.MULTIPLY:
        return number1 * number2;
      case OPERATIONS.DIVIDE:
        if (number2 === 0) {
          console.error(ERROR_MESSAGE.Cannot_Divide_by_0);
          return ERROR_MESSAGE.Cannot_Divide_by_0;
        } else {
          return number1 / number2;
        }
      default:
        console.error(ERROR_MESSAGE.Invalid_Operator);
        return ERROR_MESSAGE.Invalid_Operator;
    }
  }
}
