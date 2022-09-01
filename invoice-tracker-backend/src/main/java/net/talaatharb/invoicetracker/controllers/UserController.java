package net.talaatharb.invoicetracker.controllers;

import java.net.URI;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.dtos.UserDetails;
import net.talaatharb.invoicetracker.dtos.UserDto;
import net.talaatharb.invoicetracker.exceptions.ExcelResponseMessage;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.UserRepository;
import net.talaatharb.invoicetracker.services.FilterUserService;
import net.talaatharb.invoicetracker.services.UserService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*" , allowedHeaders = "*", maxAge = 3600)
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    private final UserService userService;
    @Autowired
    private FilterUserService filterUserService;


    @GetMapping("/users")
    public ResponseEntity<List<UserDetails>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser(@RequestParam long ID) {
        return ResponseEntity.ok().body(userService.getUser(ID));
    }

    @PutMapping("/user/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable long id, @RequestBody UserDetails userDetails) {
        return userService.updateUser(id, userDetails);
    }

    @PostMapping("/user/save")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(user));
    }

    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }


    @GetMapping("/users/filter")
    public ResponseEntity<List<UserDetails>> filterEmployees(@RequestParam("type") String type, @RequestParam("values") List<String> values) throws ParseException {

        if (type.equals("englishName")) {
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByName(values)));
        } else if (type.equals("arabicName")) {
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByArabicName(values)));
        } else if (type.equals("jobTitle")) {
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByJobTitle(values)));

        } else if (type.equals("joinDate")) {

            SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
            String dateInString = values.get(0);
            Date date = formatter.parse(dateInString);
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByJoinDate(date)));

        } else if (type.equals("endDate")) {

            SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
            String dateInString = values.get(0);
            Date date = formatter.parse(dateInString);
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByEndDate(date)));

        } else if (type.equals("billable")) {

            String boolInString = values.get(0);
            boolean billable = Boolean.parseBoolean(boolInString);
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByBillable(billable)));

        } else if (type.equals("disabled")) {

            String boolInString = values.get(0);
            boolean isDisabled = Boolean.parseBoolean(boolInString);
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByISDisabled(isDisabled)));

        } else if (type.equals("isFullTime")) {

            String boolInString = values.get(0);
            boolean isFullTime = Boolean.parseBoolean(boolInString);
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByISFullTime(isFullTime)));

        } else if (type.equals("teams")) {
            List<User> ulist = filterUserService.FindUsersByTeamsName(values);

            return ResponseEntity.ok(filterUserService.convert_user_userdto(ulist));

        } else if (type.equals("id")) {
            List<Long> longList = new ArrayList<Long>();
            for (String s : values) longList.add(Long.valueOf(s));
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeById(longList)));

        } else if (type.equals("allowedBalance")) {
            List<Integer> intList = new ArrayList<Integer>();
            for (String s : values) intList.add(Integer.parseInt(s));
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByBalance(intList)));

        } else if (type.equals("remainingBalance")) {
            List<Integer> intList = new ArrayList<Integer>();
            for (String s : values) intList.add(Integer.parseInt(s));
            return ResponseEntity.ok(filterUserService.convert_user_userdto(filterUserService.filterEmployeeByRemainBalance(intList)));
        }
        return null;
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


    // add employee apdo
    @PostMapping(path = "/employee/add")
    public ResponseEntity<ExcelResponseMessage> Add_Employee(@RequestBody UserDto employee) {
        String message = "";
        try {
            Optional<User> test_user = userRepository.findByUserId(employee.getUserId());
            if (!test_user.isPresent()) {

                userService.SaveEmployee(employee);
                message = "User Saved successfully ";
                return ResponseEntity.status(HttpStatus.OK).body(new ExcelResponseMessage(message));
            } else {
                message = "User ID already taken ! ";
                return ResponseEntity.status(HttpStatus.OK).body(new ExcelResponseMessage(message));

            }
        } catch (Exception e) {
            message = "Faild to Save User !";

            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ExcelResponseMessage(message));
        }
    }



}
