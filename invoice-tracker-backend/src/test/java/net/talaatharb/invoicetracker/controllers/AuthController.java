package net.talaatharb.invoicetracker.controllers;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repository.UserRepository;
import net.talaatharb.invoicetracker.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
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
    public void checkAuth() throws Exception {
        mockMvc.perform(get("/api/auth/login"))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void checkAuth2() throws Exception {
        mockMvc.perform(post("/api/auth/login"))
                .andExpect(status().isBadRequest());
    }

    @Test
   public void checkIfRequestToLoginIsSuccessful() throws Exception {
       mockMvc.perform(put("/api/auth/login"))
               .andExpect(status().isOk());
   }

   @Test
   public void shouldReturnAllUsersForUnauthenticatedUsers() throws Exception {
       when(userService.getUsers())
               .thenReturn(List.of(new User(
                          "Gado1",
                          "boogado@yahoo.com",
                          "awad36148")));

       mockMvc
               .perform(MockMvcRequestBuilders.get("/api/auth/login"))
               .andExpect(MockMvcResultMatchers.status().isBadRequest());
   }

    @Test
    public void shouldReturn404WhenUserIsNotFound() throws Exception {
        when(userService.getUser("Gado"))
                .thenThrow(new UsernameNotFoundException("Gado is not found"));
        mockMvc
                .perform(MockMvcRequestBuilders.get("/api/auth/login"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }



}
