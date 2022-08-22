package net.talaatharb.invoicetracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.UserRepository;

@Service
public class ExcelService {


    @Autowired
    private final UserRepository userRepository;

    public ExcelService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    // add list of user to data base
    public void save(List<User> Income_list) {
        try {
            List<User> Employees = ExcelHelper.excelToTutorials(Income_list);
            userRepository.saveAll(Employees);
        } catch (Exception e) {
            throw new RuntimeException("fail to store excel data: " + e.getMessage());
        }
    }
}
