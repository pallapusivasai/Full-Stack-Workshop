# Task Manager – Spring WebFlux Application

## Project Overview
This project is a reactive **Task Manager application** built using **Spring Boot WebFlux**.
It demonstrates non-blocking, asynchronous programming using **Project Reactor (Mono & Flux)**.

The application exposes REST APIs to manage tasks.

---

## Technologies Used
- Java 17+
- Spring Boot
- Spring WebFlux
- Project Reactor (Mono, Flux)
- Maven
- IntelliJ IDEA

---

## Key Concepts Covered
- Reactive Programming
- Non-blocking I/O
- Spring WebFlux
- REST APIs
- Mono and Flux
- Layered Architecture

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

## How the Application Works
- Controller layer handles HTTP requests
- Service layer contains business logic
- Repository layer manages data access
- Reactive types (Mono / Flux) are used throughout

---

## How to Run the Project

### Prerequisites
- Java 17 or higher
- Maven
- IntelliJ IDEA

---

### Run Using IntelliJ
1. Open the project in IntelliJ
2. Wait for Maven dependencies to download
3. Open TaskManagerApplication.java
4. Click Run ▶

---

### Run Using Terminal
Navigate to the project directory and run:

mvn spring-boot:run

---

## Sample API Endpoints

GET /tasks  
Returns all tasks (Flux)

GET /tasks/{id}  
Returns a task by ID (Mono)

POST /tasks  
Creates a new task

DELETE /tasks/{id}  
Deletes a task

---

## Expected Output
Application starts successfully and runs on:

http://localhost:8080

---

## Learning Outcome
- Understand reactive programming
- Learn Spring WebFlux fundamentals
- Build non-blocking REST APIs
- Difference between Spring MVC and WebFlux

---

## What’s Next
- Add database (R2DBC / MongoDB)
- Add validation and error handling
- Write unit tests