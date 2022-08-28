package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.UserRepository;

@Service
public class ExcelService {


    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    public ExcelService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }



    // add list of user to data base
    public void save(List<User> Income_list) {
        try {
            List<User> Employees = excelToTutorials(Income_list);
            userRepository.saveAll(Employees);
        } catch (Exception e) {
            throw new RuntimeException("fail to store excel data: " + e.getMessage());
        }
    }


    public  List<User> excelToTutorials(List<User> income_list) {

        try {
            List<User> employeeList = new ArrayList<>();

            for (int i = 0; i < income_list.size(); i++) {
                User employee = new User();

                employee.setNationalId(income_list.get(i).getNationalId());
                employee.setEnglishName(income_list.get(i).getEnglishName());
                employee.setArabicName(income_list.get(i).getArabicName());
                employee.setEmail(income_list.get(i).getEmail());
                employee.setPassword(income_list.get(i).getPassword());
                employee.setEnglishAddress(income_list.get(i).getEnglishAddress());
                employee.setArabicAddress(income_list.get(i).getArabicAddress());
                employee.setAllowedBalance(income_list.get(i).getAllowedBalance());
                employee.setRemainingBalance(income_list.get(i).getAllowedBalance());
                employee.setBillable(income_list.get(i).isBillable());
                employee.setDisabled(income_list.get(i).isDisabled());
                employee.setJoiningDate(income_list.get(i).getJoiningDate());
                employee.setBirthDate(income_list.get(i).getBirthDate());
                employee.setMobileNumber(income_list.get(i).getMobileNumber());
                employee.setFullTime(income_list.get(i).isFullTime());
                employee.setTeams(income_list.get(i).getTeams());
                employee.setJobTitle(income_list.get(i).getJobTitle());
                employee.setUserId(income_list.get(i).getUserId());
                employeeList.add(employee);
            }

            return employeeList;

        } catch (Exception e) {
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }
    }
}
