Spring Core (Dependency Injection)

## Project Overview
This project demonstrates of Spring learning, where we move from manual
object creation to Spring Core Dependency Injection (DI) using the IoC container.

It is a console-based Java application built using Spring Core (spring-context)
and Maven.

---

## Goal
Eliminate manual dependency wiring and let Spring manage object creation and
dependency injection automatically.

---

## Key Concepts Covered
- Inversion of Control (IoC)
- Dependency Injection (DI)
- Spring ApplicationContext
- Component Scanning
- Constructor-based Injection
- Loose Coupling

---

## Project Structure

stage-3-spring-core
|
|-- pom.xml
|-- README.md
|-- src
|-- main
|-- java
|-- com/example/taskmanager
|-- Main.java
|-- config
|   |-- AppConfig.java
|-- ui
|   |-- ConsoleUI.java
|-- service
|   |-- TaskService.java
|-- repository
|   |-- TaskRepository.java
|-- db
|-- ConnectionManager.java

---

## Before vs After (Concept)

Before (Stage 2 – Manual Wiring)

ConnectionManager cm = new ConnectionManager();
TaskRepository repo = new TaskRepository(cm);
TaskService service = new TaskService(repo);
ConsoleUI ui = new ConsoleUI(service);
ui.run();

After (Stage 3 – Spring Dependency Injection)

ApplicationContext context =
new AnnotationConfigApplicationContext(AppConfig.class);

ConsoleUI ui = context.getBean(ConsoleUI.class);
ui.run();

Spring creates and wires all dependencies automatically.

---

## Important Annotations Used

@Component
Marks a class as a Spring-managed bean.

@Service
Used for business logic classes.

@Repository
Used for data access classes.

@Autowired
Tells Spring to inject required dependencies automatically.

@Configuration
Marks a class as Spring configuration.

@ComponentScan
Tells Spring which package to scan for components.

---

## Dependency Graph (Handled by Spring)

ConsoleUI
|
--> TaskService
|
--> TaskRepository
|
--> ConnectionManager

Spring determines the correct creation order automatically.

---

## How the Application Starts

1. Main class creates ApplicationContext
2. Spring reads AppConfig
3. ComponentScan finds all annotated classes
4. Spring analyzes dependencies
5. Beans are created in the correct order
6. Dependencies are injected
7. Application is ready to run

---

## How to Run the Project

### Prerequisites
- Java 17 or above
- Maven
- IntelliJ IDEA (recommended)

### Run Using IntelliJ Terminal

mvn clean compile exec:java

---

## Expected Output

ConnectionManager created
Console UI started
Task saved using connection manager

---

## Benefits Gained in Stage 3

- No manual object creation
- Loose coupling between classes
- Easier maintenance
- Better testability
- Clean and readable Main class

---

## Exercises
1. Add a new service (TaskStatisticsService) that depends on TaskRepository.
2. Remove @Service from TaskService and observe the error.
3. Try field injection instead of constructor injection and compare results.

---

## What’s Next
Stage 4 introduces Spring Boot for auto-configuration and simplified setup.
