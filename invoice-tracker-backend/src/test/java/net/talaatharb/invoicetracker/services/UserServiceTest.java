package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repository.UserRepository;
import net.talaatharb.invoicetracker.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)

public class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;


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

}
