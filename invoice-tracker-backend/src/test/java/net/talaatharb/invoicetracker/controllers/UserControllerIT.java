package net.talaatharb.invoicetracker.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.test.context.support.WithMockUser;

import com.fasterxml.jackson.core.JsonProcessingException;

import net.talaatharb.invoicetracker.InvoiceTrackerBackendApplication;
import net.talaatharb.invoicetracker.api.AbstractControllerIT;
import net.talaatharb.invoicetracker.dtos.UserDto;
import net.talaatharb.invoicetracker.models.ERole;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.services.FilterUserService;
import net.talaatharb.invoicetracker.services.UserDetailsImpl;

class UserControllerIT extends AbstractControllerIT {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private FilterUserService filterUserService;

	@Test
	@WithMockUser
	void testGetUsers() throws Exception {
		mvc.perform(get("/api/users")).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	void testGetUser() throws Exception {
		UserDetailsImpl user = (UserDetailsImpl) userDetailsService
				.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_USER);

		mvc.perform(get("/api/user").param("ID", user.getId() + "")).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	void testUpdateUser() throws Exception {
		UserDetailsImpl user = (UserDetailsImpl) userDetailsService
				.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_USER);

		mvc.perform(put("/api/user/update/" + user.getId()).contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(user))).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	void testSaveRole() throws JsonProcessingException, Exception {
		Role role = new Role(45L, ERole.ROLE_USER);
		mvc.perform(post("/api/role/save").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(role))).andExpect(status().isCreated());
	}

	@Test
	@WithMockUser
	void testfilterUser() throws Exception {
		UserDetailsImpl user = (UserDetailsImpl) userDetailsService
				.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_USER);

		mvc.perform(get("/api/users/filter?type=id&values=1").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(user))).andExpect(status().isOk());
	}
	@Test
	@WithMockUser
	void testfilterUserByBalance() throws Exception {
		UserDetailsImpl user = (UserDetailsImpl) userDetailsService
				.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_USER);

		mvc.perform(get("/api/users/filter?type=allowedBalance&values=21").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(user))).andExpect(status().isOk());
	}


	@Test
	@WithMockUser
	void testImport_excel() throws Exception {
		List<User> user_list  = new ArrayList<>();
		User user = new User();
		user.setUserId(6766L);
		user.setPassword("fdfs566632s");
		user.setEmail("apdaodel@gmail.com");
		user_list.add(user);


		mvc.perform(post("/api/employee/uploadexcel").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(user_list))).andExpect(status().isOk());
	}

	@Test
	@WithMockUser
	void testaddemployee() throws Exception {
		UserDto user = new UserDto();
		long generatedLong = new Random().nextLong();
		user.setUserId(generatedLong);
		user.setEnglishName("Abdelrhman Adel");
		user.setEmail("apdaohdel@gmail.com");
		user.setPassword("0231231DSDAdas");



		mvc.perform(post("/api/employee/add").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(user))).andExpect(status().isOk());
	}

}
