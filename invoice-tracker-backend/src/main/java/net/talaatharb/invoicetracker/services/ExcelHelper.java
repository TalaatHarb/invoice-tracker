package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;

import net.talaatharb.invoicetracker.models.User;

public class ExcelHelper {


    // check list of Users
    public static List<User> excelToTutorials(List<User> income_list) {

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
                employee.setJopTitle(income_list.get(i).getJopTitle());
                employee.setUserId(income_list.get(i).getUserId());
                employeeList.add(employee);
            }

            return employeeList;

        } catch (Exception e) {
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }
    }
        //check one User
        public static User add_employee_helper(User income_user){

            try {

                User employee = new User();

                employee.setNationalId(income_user.getNationalId());
                employee.setEnglishName(income_user.getEnglishName());
                employee.setArabicName(income_user.getArabicName());
                employee.setEmail(income_user.getEmail());
                employee.setPassword(income_user.getPassword());
                employee.setEnglishAddress(income_user.getEnglishAddress());
                employee.setArabicAddress(income_user.getArabicAddress());
                employee.setAllowedBalance(income_user.getAllowedBalance());
                employee.setRemainingBalance(income_user.getAllowedBalance());
                employee.setBillable(income_user.isBillable());
                employee.setDisabled(income_user.isDisabled());
                employee.setJoiningDate(income_user.getJoiningDate());
                employee.setBirthDate(income_user.getBirthDate());
                employee.setMobileNumber(income_user.getMobileNumber());
                employee.setFullTime(income_user.isFullTime());
                employee.setTeams(income_user.getTeams());
                employee.setJopTitle(income_user.getJopTitle());
                employee.setUserId(income_user.getUserId());
                return employee;
            }
           catch(Exception e){
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }

         }
    }




