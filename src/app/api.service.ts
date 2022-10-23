import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  AddEmployee = (data: any) => {
    return this.http.post('http://localhost:8080/employeeadd', data);
  }
  ViewEmployee = () => {
    return this.http.get('http://localhost:8080/employeeview');
  }
  DeleteEmployee = (id: any) => {
    return this.http.post('http://localhost:8080/employeeedelete', id);
  }
}
