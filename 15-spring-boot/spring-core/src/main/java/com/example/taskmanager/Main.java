package com.example.taskmanager;

import com.example.taskmanager.config.AppConfig;
import com.example.taskmanager.ui.ConsoleUI;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        ConsoleUI ui = context.getBean(ConsoleUI.class);
        ui.run();
    }
}
