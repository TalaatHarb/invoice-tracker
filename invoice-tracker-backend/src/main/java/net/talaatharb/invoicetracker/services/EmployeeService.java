package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.models.Employee;

import java.util.List;

public interface EmployeeService {
    List<Employee> filterEmployeeByName(String name);
    List<Employee>filterEmployeeByArabicName(String arabicName);
    List<Employee>filterEmployeeByTeamName(String teamName);
    List<Employee>filterEmployeeByJobTitle(String jobTitle);
    List<Employee>filterEmployeeByJoinDate(String joinDate);
    List<Employee>filterEmployeeByEndDate(String endDate);
    List<Employee>filterEmployeeById(Long id);
    List<Employee>filterEmployeeByBalance(int balance);
    List<Employee>filterEmployeeByRemainBalance(int remainBalance);

    List<Employee>filterEmployeeByIsBillable(boolean billable);
    List<Employee>filterEmployeeByIsDisabled(boolean isDisabled);
    List<Employee>filterEmployeeByIsFullTimeJob(boolean fullTimeJob);


    Employee createEmployee(Employee employee);
    List<Employee> getAllEmployeesByTeamName(String teamName);

}
