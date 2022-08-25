package net.talaatharb.invoicetracker.controllers;

import java.net.URI;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.dtos.UserDetails;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.services.FilterUserService;
import net.talaatharb.invoicetracker.services.UserService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*" , allowedHeaders = "*", maxAge = 3600)
public class UserController {

    @Autowired
    private final UserService userService;
    @Autowired
    private FilterUserService filterUserService;

    @GetMapping("/users")
    public ResponseEntity<List<UserDetails>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser(@RequestParam long ID){
        return ResponseEntity.ok().body(userService.getUser(ID));
    }

    @PutMapping("/user/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable  long id, @RequestBody UserDetails userDetails){
        return userService.updateUser(id,userDetails);
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


    @GetMapping("/users/filter")
    public ResponseEntity<List<User>> filterEmployees(@RequestParam("type") String type, @RequestParam("values") List<String> values) throws ParseException {

        if (type.equals("englishName")) {
            return ResponseEntity.ok(filterUserService.filterEmployeeByName(values));
        }
        else if (type.equals("arabicName")) {
            return ResponseEntity.ok(filterUserService.filterEmployeeByArabicName(values));
        }
        else if (type.equals("jobTitle")) {
            return ResponseEntity.ok(filterUserService.filterEmployeeByJobTitle(values));

        }
        else if (type.equals("joinDate")) {

            SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
            String dateInString = values.get(0);
            Date date = formatter.parse(dateInString);
            return ResponseEntity.ok(filterUserService.filterEmployeeByJoinDate(date));

       }
        else if (type.equals("endDate")) {

            SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
            String dateInString = values.get(0);
            Date date = formatter.parse(dateInString);
            return ResponseEntity.ok(filterUserService.filterEmployeeByJoinDate(date));

        }

        else if (type.equals("billable")) {

            String boolInString = values.get(0);
            boolean billable=Boolean.parseBoolean(boolInString);
            return ResponseEntity.ok(filterUserService.filterEmployeeByBillable(billable));

        }
        else if (type.equals("isDisabled")) {

            String boolInString = values.get(0);
            boolean isDisabled=Boolean.parseBoolean(boolInString);
            return ResponseEntity.ok(filterUserService.filterEmployeeByISDisabled(isDisabled));

        }
        else if (type.equals("isFullTime")) {

            String boolInString = values.get(0);
            boolean isFullTime=Boolean.parseBoolean(boolInString);
            return ResponseEntity.ok(filterUserService.filterEmployeeByISFullTime(isFullTime));

        }
//        else if (type.equals("teamName")) {
//            return ResponseEntity.ok(filterUserService.filterEmployeeByTeamName(values));

        else if (type.equals("id")) {
            List<Long> longList = new ArrayList<Long>();
            for (String s : values) longList.add(Long.valueOf(s));
            return ResponseEntity.ok(filterUserService.filterEmployeeById(longList));

        } else if (type.equals("allowedBalance")) {
            List<Integer> intList = new ArrayList<Integer>();
            for (String s : values) intList.add(Integer.parseInt(s));
            return ResponseEntity.ok(filterUserService.filterEmployeeByBalance(intList));
        } else if (type.equals("remainingBalance")) {
            List<Integer> intList = new ArrayList<Integer>();
            for (String s : values) intList.add(Integer.parseInt(s));
            return ResponseEntity.ok(filterUserService.filterEmployeeByRemainBalance(intList));
        }
        return null;
    }

}
