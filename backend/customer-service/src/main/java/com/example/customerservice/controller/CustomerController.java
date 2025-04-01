package com.example.customerservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer") // Added base mapping for all customer-related endpoints
public class CustomerController {

	@GetMapping("/hello")
	public String getHello() {
		return "hello";
	}
}
