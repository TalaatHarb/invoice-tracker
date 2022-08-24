package net.talaatharb.invoicetracker.controllers;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.dtos.UserDto;
import net.talaatharb.invoicetracker.exceptions.ExcelResponseMessage;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.UserRepository;
import net.talaatharb.invoicetracker.services.UserService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private final UserService userService;
    private  final UserRepository userRepository;

//
//    @GetMapping("/users")
//    public ResponseEntity<List<UserDetails>> getUsers() {
//        return ResponseEntity.ok().body(userService.getUsers());
//    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser(@RequestParam long ID){
        return ResponseEntity.ok().body(userService.getUser(ID));
    }

    @PostMapping("/user/save")
    public ResponseEntity<User>saveUser(@RequestBody User user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(user));
    }

    @PostMapping("/role/save")
    public ResponseEntity<Role>saveRole(@RequestBody Role role) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }


    // add employee apdo
    @PostMapping(path = "/employee/add")
    public ResponseEntity<ExcelResponseMessage> Add_Employee(@RequestBody UserDto employee)
    {
        String message = "";

        try {
            Optional<User> test_user = userRepository.findByUserId(employee.getUserId());
            if(!test_user.isPresent()) {

                userService.SaveEmployee(employee);
                message = "User Saved successfully ";
                return ResponseEntity.status(HttpStatus.OK).body(new ExcelResponseMessage(message));
            }else{
                message = "User ID already taken ! ";
                return ResponseEntity.status(HttpStatus.OK).body(new ExcelResponseMessage(message));

            }
        } catch (Exception e) {
            message = "Faild to Save User !";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ExcelResponseMessage(message));
        }

    }

    // add users from excel sheet
    @PostMapping(path = "/employee/uploadexcel")
    public ResponseEntity<ExcelResponseMessage> uploadFile(@RequestBody List<User> Employees_list) {

        String message = "";



        try {
            userService.saveemployee_excel(Employees_list);
            message = "Uploaded the file successfully ";
            return ResponseEntity.status(HttpStatus.OK).body(new ExcelResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: !";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ExcelResponseMessage(message));
        }


    }

}
