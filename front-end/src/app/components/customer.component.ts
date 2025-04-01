import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-root',
  // templateUrl: 'customer.component.html', // Ensure this path is correct
  template: `<h1>{{ message }}</h1>`,
  styleUrls: [], // Add this if a CSS file exists for the component
})
export class CustomerComponent implements OnInit {
  message: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getHello().subscribe(
      (response) => {
        this.message = response;
      },
      (error) => {
        console.error('Error fetching hello message:', error);
      }
    );
  }
}
