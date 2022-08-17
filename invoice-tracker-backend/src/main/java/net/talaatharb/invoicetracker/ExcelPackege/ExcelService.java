package net.talaatharb.invoicetracker.ExcelPackege;

import net.talaatharb.invoicetracker.models.Employee;
import net.talaatharb.invoicetracker.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExcelService {


    EmployeeRepository employee_repository;
    @Autowired
    public ExcelService(EmployeeRepository employee_repository) {
        this.employee_repository = employee_repository;
    }

    public void save(List<Employee> Income_list) {
        try {
            List<Employee> Employees = ExcelHelper.excelToTutorials(Income_list);
            employee_repository.saveAll(Employees);
        } catch (Exception e) {
            throw new RuntimeException("fail to store excel data: " + e.getMessage());
        }
    }
    public List<Employee> getAllTutorials() {
        return employee_repository.findAll();
    }
}
