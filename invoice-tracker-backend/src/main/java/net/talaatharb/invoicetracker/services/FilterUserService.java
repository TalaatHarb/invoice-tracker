package net.talaatharb.invoicetracker.services;

import java.util.List;

import net.talaatharb.invoicetracker.models.User;

public interface FilterUserService {

    List<User> filterEmployeeByName(List<String>names);
    List<User>filterEmployeeByArabicName(List<String> arabicName);
//    List<User>filterEmployeeByTeamName(List<String> teamName);
    List<User>filterEmployeeByJobTitle(List<String> jobTitle);
    List<User>filterEmployeeById(List<Long> id);
    List<User>filterEmployeeByBalance(List<Integer> balance);
    List<User>filterEmployeeByRemainBalance(List<Integer> remainBalance);

    User createEmployee(User user);
//    List<User> getAllEmployeesByTeamName(List<String> teamName);
    List<User> getAllEmployees();
}
