package com.example.taskmanager.repository;

import com.example.taskmanager.db.ConnectionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TaskRepository {

    private final ConnectionManager connectionManager;

    @Autowired
    public TaskRepository(ConnectionManager connectionManager) {
        this.connectionManager = connectionManager;
    }

    public void save() {
        System.out.println("Task saved using connection manager");
    }
}
