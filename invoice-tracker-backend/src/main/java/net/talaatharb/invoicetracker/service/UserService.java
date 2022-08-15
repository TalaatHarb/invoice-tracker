package net.talaatharb.invoicetracker.service;

import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;

import java.util.List;


public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User>getUsers();
}
