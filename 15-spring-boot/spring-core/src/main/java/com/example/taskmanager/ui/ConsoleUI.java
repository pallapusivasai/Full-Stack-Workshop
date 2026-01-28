package com.example.taskmanager.ui;

import com.example.taskmanager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConsoleUI {

    private final TaskService taskService;

    @Autowired
    public ConsoleUI(TaskService taskService) {
        this.taskService = taskService;
    }

    public void run() {
        System.out.println("Console UI started");
        taskService.process();
    }
}
