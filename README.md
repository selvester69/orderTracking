# Proposed Topic: Real-time Order Tracking System for a Delivery Platform

🔹 Objectives:
    • Develop a REST API in Java (Spring Boot) for order management.  
    • Integrate Apache Kafka to handle events related to order status updates.  
    • Implement a Kafka consumer service for notifications or logging of status changes.  
    • Persist data in a PostgreSQL or MongoDB database.  
    • Develop an Angular interface to display real-time order tracking updates.  
    • Add a `registration-service` using Eureka for service discovery to enable a microservice architecture.

## Services:
    • Registration Service (Eureka Server): http://localhost:8761
    • Customer Service: http://localhost:8080/customer/hello
    • Order Service: http://localhost:8081/order/hello