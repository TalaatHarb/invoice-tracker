package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.models.User;

import java.util.List;

public interface FilterUserService {
    List<User> filterEmployeeByName(List<String> name);
    List<User>filterEmployeeByArabicName(List<String> arabicName);
    List<User>filterEmployeeByJobTitle(List<String> jobTitle);


}
