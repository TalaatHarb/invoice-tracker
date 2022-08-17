package net.talaatharb.invoicetracker.ExcelPackege.controllers;
import net.talaatharb.invoicetracker.ExcelPackege.ResponseMessage;

import net.talaatharb.invoicetracker.models.Employee;
import net.talaatharb.invoicetracker.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/employee")
public class EmployeeController {

    private  final EmployeeService  employeeService;
     @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping(path = "/add")
    public ResponseEntity<ResponseMessage> Add_Employee(@RequestBody Employee employee)
    {
        String message = "";
        try {
            employeeService.SaveEmployee(employee);
            message = "User Saved successfully ";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Faild to Save User !";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

    }

}
