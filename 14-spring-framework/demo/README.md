# Demo – Spring Boot Application

## Project Overview
This project is a basic **Spring Boot demo application** created to understand
the fundamentals of Spring Boot such as auto-configuration, embedded server,
and simplified project setup using Maven.

It serves as an introductory project before moving into advanced Spring topics.

---

## Technologies Used
- Java 17+
- Spring Boot
- Maven
- Embedded Tomcat Server
- IntelliJ IDEA

---

## Project Structure

demo
|
|-- pom.xml
|-- mvnw
|-- mvnw.cmd
|-- HELP.md
|-- README.md
|-- src
|-- main
|-- java
|   |-- com/example/demo
|       |-- DemoApplication.java
|-- resources
|-- application.properties
|-- test
|-- java
|-- com/example/demo

---

## Key Features
- Spring Boot auto-configuration
- Embedded Tomcat server (no external server required)
- Maven-based dependency management
- Simple and clean project structure
- Ready for REST API or web development

---

## Main Class Explanation

DemoApplication.java is the entry point of the application.

@SpringBootApplication does the following:
- Enables component scanning
- Enables auto-configuration
- Marks this as a Spring Boot application

Example:

@SpringBootApplication
public class DemoApplication {
public static void main(String[] args) {
SpringApplication.run(DemoApplication.class, args);
}
}

---

## How to Run the Project

### Prerequisites
- Java 17 or higher
- Maven
- IntelliJ IDEA (recommended)

---

### Run Using IntelliJ
1. Open the project in IntelliJ
2. Wait for Maven dependencies to download
3. Open DemoApplication.java
4. Click the green Run button ▶

---

### Run Using Terminal
Navigate to the project directory and run:

mvn spring-boot:run

---

## Expected Output
Application starts successfully and shows logs similar to:

Tomcat started on port 8080
Started DemoApplication in X seconds

---

## application.properties
This file is used to configure:
- Server port
- Database connections
- Logging levels
- Application settings

(Default configuration works without changes)

---

## Advantages of Spring Boot
- No XML configuration required
- No manual server setup
- Faster development
- Production-ready defaults
- Easy deployment

---

## Learning Outcome
After completing this project, you will understand:
- Difference between Spring and Spring Boot
- How auto-configuration works
- How Spring Boot applications start
- How to run applications using Maven and IntelliJ

---

## What’s Next
- Add REST controllers
- Connect to a database
- Learn Spring Core and Dependency Injection
- Build real-world Spring Boot applications
