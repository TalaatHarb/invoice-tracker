package net.talaatharb.invoicetracker.ExcelPackege;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExcelService {


    Employee_Repository employee_repository;
    @Autowired
    public ExcelService(Employee_Repository repository) {
        this.employee_repository = repository;
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
