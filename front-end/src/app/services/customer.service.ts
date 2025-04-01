import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'http://localhost:8761'; // Eureka Server URL

  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http.get(`${this.baseUrl}/customer-service/customer/hello`, {
      responseType: 'text',
    });
  }
}
