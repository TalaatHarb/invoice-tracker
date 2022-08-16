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
    @GetMapping("/filter/name")
    public ResponseEntity<List<Employee>> filterEmployeesByName(@RequestParam("name") String name){
        return  ResponseEntity.ok(employeeService.filterEmployeeByName(name));
    }
    @GetMapping("/filter/arabicName")
    public ResponseEntity<List<Employee>>filterEmployeesByArabicName(@RequestParam("arabicName") String arabicName){
        return  ResponseEntity.ok(employeeService.filterEmployeeByArabicName(arabicName));
    }
    @GetMapping("/filter/jobTitle")
    public ResponseEntity<List<Employee>>filterEmployeesByJobTitle(@RequestParam("jobTitle") String jobTitle){
        return  ResponseEntity.ok(employeeService.filterEmployeeByJobTitle(jobTitle));
    }
    @GetMapping("/filter/teamName")
    public ResponseEntity<List<Employee>>filterEmployeesByTeamName(@RequestParam("teamName") String teamName){
        return  ResponseEntity.ok(employeeService.filterEmployeeByTeamName(teamName));
    }
    @GetMapping("/filter/joinDate")
    public ResponseEntity<List<Employee>>filterEmployeesByJoinDate(@RequestParam("joinDate") String joinDate){
        return  ResponseEntity.ok(employeeService.filterEmployeeByJoinDate(joinDate));
    }
    @GetMapping("/filter/endDate")
    public ResponseEntity<List<Employee>>filterEmployeesByEndDate(@RequestParam("endDate") String endDate){
        return  ResponseEntity.ok(employeeService.filterEmployeeByEndDate(endDate));
    }
    @GetMapping("/filter/id")
    public ResponseEntity<List<Employee>>filterEmployeesById(@RequestParam("id") Long id){
        return  ResponseEntity.ok(employeeService.filterEmployeeById(id));
    }
    @GetMapping("/filter/balance")
    public ResponseEntity<List<Employee>>filterEmployeesByBalance(@RequestParam("balance") int balance){
        return  ResponseEntity.ok(employeeService.filterEmployeeByBalance(balance));
    }
    @GetMapping("/filter/remainBalance")
    public ResponseEntity<List<Employee>>filterEmployeesByRemainBalance(@RequestParam("remainBalance") int remainBalance){
        return  ResponseEntity.ok(employeeService.filterEmployeeByRemainBalance(remainBalance));
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/employeesList")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
}
