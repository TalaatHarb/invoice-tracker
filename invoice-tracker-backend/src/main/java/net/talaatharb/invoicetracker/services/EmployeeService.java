package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.ExcelPackege.ExcelHelper;
import net.talaatharb.invoicetracker.models.Employee;
import net.talaatharb.invoicetracker.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    // add employee to data base
    public void SaveEmployee(Employee employee) {
        try {
            Employee employee1 = add_employee_helper(employee);
            employeeRepository.save(employee1);
        } catch (Exception e) {
            throw new RuntimeException("fail to save New User : " + e.getMessage());
        }
    }




   // check employee data before save to data base
    public static Employee add_employee_helper(Employee income_employee) {

        try {



                Employee employee = new Employee();

                employee.setJoining_date(income_employee.getJoining_date());
                employee.setAnnual_balance(income_employee.getAnnual_balance());
                employee.setEnglish_name(income_employee.getEnglish_name());
                employee.setArabic_name(income_employee.getArabic_name());
                employee.setEmployee_id(income_employee.getEmployee_id());
                employee.setEmail(income_employee.getEmail());
                employee.setBirth_date(income_employee.getBirth_date());
                employee.setEmployee_adress_arabic(income_employee.getEmployee_adress_arabic());
                employee.setEmployee_adress_english(income_employee.getEmployee_adress_english());
                employee.setIs_disabiled(income_employee.isIs_disabiled());
                employee.setIs_fullTime(income_employee.isIs_fullTime());
                employee.setTeam_name(income_employee.getTeam_name());
                employee.setJop_title(income_employee.getJop_title());
                employee.setBillable(income_employee.isBillable());
                employee.setMobile_number(income_employee.getMobile_number());
                employee.setMultible_team(income_employee.isMultible_team());
                employee.setNational_id(income_employee.getNational_id());
                employee.setPassword(income_employee.getPassword());




            return employee;

        } catch (Exception e) {
            throw new RuntimeException("fail to save employee: " + e.getMessage());
        }


    }
}
