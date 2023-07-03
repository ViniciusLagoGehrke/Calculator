import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperatorType, Response } from 'src/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private http: HttpClient) {}

  public calculate(
    number1: number,
    number2: number,
    operator: OperatorType
  ): Observable<Response> {
    return this.http.post<any>('http://localhost:8080/calculate', {
      number1,
      number2,
      operator
    })
  }
}
