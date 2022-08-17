package net.talaatharb.invoicetracker.controllers;

import net.talaatharb.invoicetracker.models.Employee;
import net.talaatharb.invoicetracker.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Employee>>filterEmployeesByName(@RequestParam("type") String type,@RequestParam("value") String value){

        if(type.equals("name"))
            return  ResponseEntity.ok(employeeService.filterEmployeeByName(value));
        else if (type.equals("arabicName")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeByArabicName(value));
        } else if (type.equals("jobTitle")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeByJobTitle(value));
        } else if (type.equals("teamName")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeByTeamName(value));
        } else if (type.equals("joinDate")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeByJoinDate(value));
        } else if (type.equals("endDate")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeByEndDate(value));
        } else if (type.equals("id")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeById(Long.parseLong(value)));
        } else if (type.equals("balance")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeByBalance(Integer.parseInt(value)));

        } else if (type.equals("remainBalance")) {
            return  ResponseEntity.ok(employeeService.filterEmployeeByRemainBalance(Integer.parseInt(value)));
        }

        return null;
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/employeesList")
    public List<Employee> getAllEmployees(@RequestParam("type") String TeamNAme){
        return employeeService.getAllEmployeesByTeamName(TeamNAme);
    }
}
