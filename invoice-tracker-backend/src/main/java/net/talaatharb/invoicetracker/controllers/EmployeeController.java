package net.talaatharb.invoicetracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.talaatharb.invoicetracker.dtos.UserDetails;
import net.talaatharb.invoicetracker.services.UserService;

@CrossOrigin(origins = "*" , maxAge = 3600)
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<UserDetails> getAllEmployees(){
        return userService.getUsers();
    }
}
