package com.example.springconsole;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppRunner {

    @Bean
    CommandLineRunner run() {
        return args -> {
            System.out.println("✅ Spring Boot Console App is running!");
            System.out.println("👉 Arguments count: " + args.length);
        };
    }
}
