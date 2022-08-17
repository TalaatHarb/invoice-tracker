package net.talaatharb.invoicetracker.service;


import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.models.ERole;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repository.RoleRepositry;
import net.talaatharb.invoicetracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class UserService {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final RoleRepositry  roleRepositry;

    private final PasswordEncoder passwordEncoder;



    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Role saveRole(Role role) {
        return roleRepositry.save(role);
    }

    public void addRoleToUser(String email, ERole userRole) {
        Optional<User> user = userRepository.findByEmail(email);
        Optional<Role> role = roleRepositry.findByName(userRole);
        if (user.isPresent() && role.isPresent()) {
            user.get().getRoles().add(role.get());
        }
    }
    public User getUser(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
