package net.talaatharb.invoicetracker.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import net.talaatharb.invoicetracker.models.*;
import net.talaatharb.invoicetracker.repository.RequestRepository;
import net.talaatharb.invoicetracker.repository.RequestTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.repository.RoleRepositry;
import net.talaatharb.invoicetracker.repository.UserRepository;

@Service
@AllArgsConstructor
@Transactional
public class UserService {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final RoleRepositry  roleRepositry;

    private final PasswordEncoder passwordEncoder;
    @Autowired
    private final RequestRepository requestRepository;
    @Autowired
    private final RequestTypeRepository requestTypeRepository;



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
    public User getUser(long ID) {
        return userRepository.findById(ID).orElse(null);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void saveRequest(Long ID, String type, Request request) {
        requestRepository.save(request);
        User user = userRepository.findById(ID).get();
        user.getRequests().add(request);
        request.setRequested_by(ID);
        RequestType Rtype= requestTypeRepository.findByName(type);
        request.setType(type);
        Rtype.getRequests().add(request);


    }


    public void saveRequestType(RequestType type) {
        requestTypeRepository.save(type);
    }
}

