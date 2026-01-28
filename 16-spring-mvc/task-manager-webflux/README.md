# Task Manager – Spring WebFlux Application

## Project Overview
This project is a reactive Task Manager application built using Spring Boot
with Spring WebFlux. It demonstrates non-blocking, asynchronous programming
using Project Reactor (Mono and Flux).

The application exposes REST APIs to create, retrieve, and delete tasks in a
reactive way.

---

## Technologies Used
- Java 17+
- Spring Boot
- Spring WebFlux
- Project Reactor (Mono, Flux)
- R2DBC MySQL
- Maven
- IntelliJ IDEA

---

## Key Concepts Covered
- Reactive Programming
- Non-blocking I/O
- Spring WebFlux
- Reactive REST APIs
- Mono and Flux
- Layered Architecture
- R2DBC (Reactive Database Connectivity)

---

## Project Structure

task-manager-webflux
|
|-- pom.xml
|-- README.md
|-- src
|-- main
|-- java
|   |-- com/example/taskmanager
|       |-- TaskManagerApplication.java
|       |-- controller
|       |-- service
|       |-- repository
|       |-- model
|-- resources
|-- application.properties
|-- test
|-- java

---

## Architecture
The project follows a layered architecture:

Controller Layer  
→ Handles HTTP requests and responses

Service Layer  
→ Contains business logic

Repository Layer  
→ Handles database operations using R2DBC

Model Layer  
→ Represents data entities

All layers use reactive types (Mono and Flux).

---

## Main Class
TaskManagerApplication.java is the entry point of the application.

@SpringBootApplication enables:
- Auto-configuration
- Component scanning
- Spring Boot setup

---

## Database Configuration
The application uses MySQL with R2DBC.

Example configuration in application.properties:

spring.r2dbc.url=r2dbc:mysql://localhost:3306/taskdb?serverTimezone=Asia/Kolkata
spring.r2dbc.username=root
spring.r2dbc.password=your_password

---

## REST API Endpoints

GET /tasks  
Returns all tasks (Flux)

GET /tasks/{id}  
Returns a task by ID (Mono)

POST /tasks  
Creates a new task

DELETE /tasks/{id}  
Deletes a task

---

## How to Run the Project

### Prerequisites
- Java 17 or higher
- Maven
- MySQL Server
- IntelliJ IDEA (recommended)

---

### Run Using IntelliJ
1. Open the project in IntelliJ
2. Allow Maven dependencies to download
3. Open TaskManagerApplication.java
4. Click the Run ▶ button

---

### Run Using Terminal
Navigate to the project directory and run:

mvn spring-boot:run

---

## Expected Output
Application starts successfully and runs on:

http://localhost:8080

You should see logs indicating that Netty server has started.

---

## Common Issues & Notes
- Netty warnings related to sun.misc.Unsafe are normal and can be ignored
- MySQL timezone should be set to Asia/Kolkata to avoid DateTime warnings
- R2DBC errors usually indicate database configuration issues

---

## Learning Outcome
After completing this project, you will understand:
- How Spring WebFlux works
- Difference between Spring MVC and WebFlux
- How reactive streams work using Mono and Flux
- How to build non-blocking REST APIs
- How R2DBC works with MySQL

---

## What’s Next
- Add validation and exception handling
- Add Swagger / OpenAPI documentation
- Add authentication
- Connect using R2DBC repositories
- Write unit tests for reactive flows
