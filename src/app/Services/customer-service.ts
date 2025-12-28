import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "http://localhost:5067/api";

  constructor(private http: HttpClient){

  }

  addCustomer(customer: Customer){
    return this.http.post<Customer>(this.apiUrl + '/Customers', customer);
  }

  getCustomers(){
    return this.http.get<Customer[]>(this.apiUrl + '/Customers');
  }
  
}
