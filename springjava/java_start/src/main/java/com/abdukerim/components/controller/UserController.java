package com.abdukerim.components.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class UserController {
    
    @GetMapping()
    public String getName() {
        return "My name";
    }
    
}
