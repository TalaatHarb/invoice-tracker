package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.FilterUserRepository;

import java.util.List;

public class FilterUserServiceImp implements FilterUserService{

    FilterUserRepository filterUserRepository;

    public FilterUserServiceImp(FilterUserRepository filterUserRepository) {
        this.filterUserRepository = filterUserRepository;
    }

    @Override
    public List<User> filterEmployeeByName(List<String> name) {
        return null;
    }

    @Override
    public List<User> filterEmployeeByArabicName(List<String> arabicName) {
        return null;
    }

    @Override
    public List<User> filterEmployeeByJobTitle(List<String> jobTitle) {
        return null;
    }
}
