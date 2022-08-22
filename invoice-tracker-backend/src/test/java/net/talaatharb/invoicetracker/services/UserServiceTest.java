package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)

public class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;


    @Test
    public void testContextLoads() {
        assertNotNull(userService);
    }

    @Test
    public void testContextLoads2() {
        assertNotNull(userRepository);
    }

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setId(1L);
        user.setUsername("test");
        user.setEmail("boogado@yahoo.com");
        user.setPassword("test");
        user.setRoles(null);
    }

    @Test
    public void testSaveUser () {
        User user = new User();
        user.setId(1L);
        user.setUsername("test");
        user.setEmail("boogado@yahoo.com");
        user.setPassword("test");
        user.setRoles(null);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.saveUser(user);
    }

    @Test
//   test if username is found or not
    public void testUserDetails() {
        try {
            userRepository.findByUsername("test");
        } catch (UsernameNotFoundException e) {
            System.out.println("username not found");
        }
    }

    @Test
    public void testUserDetails2() {
        try {
            userRepository.findByEmail("boogado555@yahoo.com");
        } catch (UsernameNotFoundException e) {
            System.out.println("email not found");
        }
    }


}
