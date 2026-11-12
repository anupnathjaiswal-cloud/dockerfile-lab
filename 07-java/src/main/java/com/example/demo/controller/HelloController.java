
package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/")
    public Map<String, String> home() {
        return Map.of(
            "message", "Welcome to Java Backend Docker Lab!",
            "status", "Running"
        );
    }

    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "UP",
            "service", "java-backend"
        );
    }

    @GetMapping("/api/info")
    public Map<String, String> info() {
        return Map.of(
            "language", "Java",
            "framework", "Spring Boot",
            "version", "17"
        );
    }
}
