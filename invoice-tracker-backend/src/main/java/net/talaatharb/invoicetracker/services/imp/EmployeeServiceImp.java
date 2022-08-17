package net.talaatharb.invoicetracker.services.imp;

import net.talaatharb.invoicetracker.models.Employee;
import net.talaatharb.invoicetracker.repositories.EmployeeRepository;
import net.talaatharb.invoicetracker.services.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImp implements EmployeeService {
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImp(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> filterEmployeeByName(String name) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByName(name);
        return  employeeList;
    }
    @Override
    public List<Employee> filterEmployeeByArabicName(String arabicName) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByArabicName(arabicName);
        return  employeeList;
    }
    @Override
    public List<Employee>filterEmployeeByTeamName(String teamName) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByTeamName(teamName);
        return  employeeList;
    }
    @Override
    public List<Employee>filterEmployeeByJobTitle(String jobTitle) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByJobTitle(jobTitle);
        return  employeeList;
    }
    @Override
    public List<Employee>filterEmployeeByJoinDate(String joinDate) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByJoinDate(joinDate);
        return  employeeList;
    }
    @Override
    public List<Employee>filterEmployeeByEndDate(String endDate) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByEndDate(endDate);
        return  employeeList;
    }
    @Override
    public List<Employee>filterEmployeeById(Long id) {
        List<Employee>employeeList=employeeRepository.filterEmployeesById(id);
        return  employeeList;
    }
    @Override
    public List<Employee>filterEmployeeByBalance(int balance) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByBalance(balance);
        return  employeeList;
    }
    @Override
    public List<Employee>filterEmployeeByRemainBalance(int remainBalance) {
        List<Employee>employeeList=employeeRepository.filterEmployeesByRemainBalance(remainBalance);
        return  employeeList;
    }


    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    @Override
    public List<Employee> getAllEmployeesByTeamName(String teamName){
        List<Employee> employees = new ArrayList<Employee>();
        employees.addAll(employeeRepository.filterEmployeesByTeamName(teamName));
        return employees;
    }

}
