package net.talaatharb.invoicetracker.services;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.FilterUserRepository;

@Service
public class FilterUserServiceImp implements FilterUserService{

    FilterUserRepository filterUserRepository;

    public FilterUserServiceImp(FilterUserRepository filterUserRepository) {
        this.filterUserRepository = filterUserRepository;
    }

    @Override
    public List<User> filterEmployeeByName(List<String> names) {
        List<User>userList=filterUserRepository.filterEmployeesByName(names);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByArabicName(List<String> arabicName) {
        List<User>userList=filterUserRepository.filterEmployeesByArabicName(arabicName);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByTeamName(List<String> teamName) {
        List<User>userList=filterUserRepository.filterEmployeesByTeamName(teamName);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByJobTitle(List<String> jobTitle) {
        List<User>userList=filterUserRepository.filterEmployeesByJobTitle(jobTitle);
        return userList;
    }



    @Override
    public List<User> filterEmployeeById(List<Long> id) {
        List<User>userList=filterUserRepository.filterEmployeesById(id);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByBalance(List<Integer> balance) {
        List<User>userList=filterUserRepository.filterEmployeesByBalance(balance);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByRemainBalance(List<Integer> remainBalance) {
        List<User>userList=filterUserRepository.filterEmployeesByRemainBalance(remainBalance);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByJoinDate(Date JoinDate) {
        List<User>userList=filterUserRepository.filterEmployeesByJoinDate(JoinDate);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByEndDate(Date endDate) {
        List<User>userList=filterUserRepository.filterEmployeesByEndDate(endDate);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByBillable(boolean billable) {
        List<User>userList=filterUserRepository.filterEmployeesByBillable(billable);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByISDisabled(boolean isDisabled) {
        List<User>userList=filterUserRepository.filterEmployeesByIsDisabled(isDisabled);
        return userList;
    }

    @Override
    public List<User> filterEmployeeByISFullTime(boolean isFullTime) {
        List<User>userList=filterUserRepository.filterEmployeesByIsDisabled(isFullTime);
        return userList;
    }

//    @Override
//    public User createEmployee(User user) {
//        return filterUserRepository.save(user);
//    }
//
//    @Override
//    public List<User> getAllEmployeesByTeamName(List<String> teamName) {
//        List<User> employees = new ArrayList<User>();
//        employees.addAll(filterUserRepository.filterEmployeesByTeamName(teamName));
//        return employees;
//    }
//
//    @Override
//    public List<User> getAllEmployees() {
//        List<User> employees = new ArrayList<User>();
//        employees.addAll(filterUserRepository.findAll());
//        return employees;
//    }
}
