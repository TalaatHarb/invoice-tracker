package net.talaatharb.invoicetracker.services;

import java.util.Date;
import java.util.List;

import net.talaatharb.invoicetracker.models.User;

public interface FilterUserService {

    List<User> filterEmployeeByName(List<String>names);
    List<User>filterEmployeeByArabicName(List<String> arabicName);

    List<User>filterEmployeeByJobTitle(List<String> jobTitle);
    List<User>filterEmployeeByTeamName(List<String> teamName);
    List<User>filterEmployeeById(List<Long> id);
    List<User>filterEmployeeByBalance(List<Integer> balance);
    List<User>filterEmployeeByRemainBalance(List<Integer> remainBalance);
    List<User>filterEmployeeByJoinDate(Date JoinDate);
    List<User>filterEmployeeByEndDate(Date endDate);
    List<User>filterEmployeeByBillable(boolean billable);
    List<User>filterEmployeeByISDisabled( boolean isDisabled);
    List<User>filterEmployeeByISFullTime( boolean isFullTime);


//    User createEmployee(User user);
//   List<User> getAllEmployeesByTeamName(List<String> teamName);
//    List<User> getAllEmployees();
}
