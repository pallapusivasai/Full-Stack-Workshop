package com.example.springconsole.service.impl;

import com.example.springconsole.service.GreetingService;

public class GreetingServiceImpl implements GreetingService {

    @Override
    public void greet() {
        System.out.println("✅ Hello from Spring Console Application!");
    }
}