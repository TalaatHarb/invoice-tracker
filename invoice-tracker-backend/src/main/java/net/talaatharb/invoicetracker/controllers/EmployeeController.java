package net.talaatharb.invoicetracker.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.talaatharb.invoicetracker.exceptions.ExcelResponseMessage;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.UserRepository;
import net.talaatharb.invoicetracker.services.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/employee")
public class EmployeeController {

   private final UserService userService;
    @Autowired
    private final UserRepository userRepository;

   @Autowired
    public EmployeeController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
       this.userRepository = userRepository;
   }

    @PostMapping(path = "/add")
    public ResponseEntity<ExcelResponseMessage> Add_Employee(@RequestBody User employee)
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

}
