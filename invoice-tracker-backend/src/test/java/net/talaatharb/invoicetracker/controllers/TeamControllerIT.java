package net.talaatharb.invoicetracker.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.security.test.context.support.WithMockUser;

import net.talaatharb.invoicetracker.api.AbstractControllerIT;

public class TeamControllerIT extends AbstractControllerIT {

    @Test
    @WithMockUser
    void testGetUsers() throws Exception {
        mvc.perform(get("/api/teams")).andExpect(status().isOk());
    }
}
