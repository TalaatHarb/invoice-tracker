package net.talaatharb.invoicetracker.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.services.FilterUserService;

@RestController
@RequestMapping("/employees")
public class FilterUserController {
    private FilterUserService filterUserService;

    @Autowired
    public FilterUserController(FilterUserService filterUserService) {
        this.filterUserService = filterUserService;
    }

    @GetMapping("/filter")
    public ResponseEntity<List<User>> filterEmployees(@RequestParam("type") String type, @RequestParam("values") List<String> values) {


        if (type.equals("name")) {
            return ResponseEntity.ok(filterUserService.filterEmployeeByName(values));
        } else if (type.equals("arabicName")) {
            return ResponseEntity.ok(filterUserService.filterEmployeeByArabicName(values));
        } else if (type.equals("jobTitle")) {
            return ResponseEntity.ok(filterUserService.filterEmployeeByJobTitle(values));
        } else if (type.equals("teamName")) {
            return ResponseEntity.ok(filterUserService.filterEmployeeByTeamName(values));
        } else if (type.equals("id")) {
            List<Long> longList = new ArrayList<Long>();
            for (String s : values) longList.add(Long.valueOf(s));
            return ResponseEntity.ok(filterUserService.filterEmployeeById(longList));
        } else if (type.equals("balance")) {
            List<Integer> intList = new ArrayList<Integer>();
            for (String s : values) intList.add(Integer.parseInt(s));
            return ResponseEntity.ok(filterUserService.filterEmployeeByBalance(intList));
        } else if (type.equals("remainBalance")) {
            List<Integer> intList = new ArrayList<Integer>();
            for (String s : values) intList.add(Integer.parseInt(s));
            return ResponseEntity.ok(filterUserService.filterEmployeeByRemainBalance(intList));
        }
        return null;
    }
    @PostMapping
    public User createEmployee(@RequestBody User employee){
        return filterUserService.createEmployee(employee);
    }

    @GetMapping("/team")
    public List<User> getAllEmployeesByTeam(@RequestParam("type") List<String> TeamName){
        return filterUserService.getAllEmployeesByTeamName(TeamName);
    }
    @GetMapping("/all")
    public List<User> getAllEmployees(){
        return filterUserService.getAllEmployees();
    }

}
