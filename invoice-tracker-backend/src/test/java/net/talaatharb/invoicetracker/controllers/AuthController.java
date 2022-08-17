package net.talaatharb.invoicetracker.controllers;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repository.UserRepository;
import net.talaatharb.invoicetracker.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(net.talaatharb.invoicetracker.api.AuthController.class)
public class AuthController {


    @Autowired
    private MockMvc mockMvc;

    @Mock
    private UserRepository userRepository;

    @Mock
    private UserService userService;

    @Test
    public void shouldReturnAllUsersForUnauthenticatedUsers() throws Exception {
        when(userService.getUsers())
                .thenReturn(List.of(new User()));
            mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk());
    }


}
