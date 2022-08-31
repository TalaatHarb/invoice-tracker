package net.talaatharb.invoicetracker.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.test.context.support.WithUserDetails;

import com.fasterxml.jackson.core.JsonProcessingException;

import net.talaatharb.invoicetracker.InvoiceTrackerBackendApplication;
import net.talaatharb.invoicetracker.api.AbstractControllerIT;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.services.UserDetailsImpl;
import org.springframework.test.web.servlet.MvcResult;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

class AbsenceControllerIT extends AbstractControllerIT {
	
	@Autowired
	private UserDetailsService userDetailsService;

	@Test
	@Disabled
	@WithUserDetails(value = InvoiceTrackerBackendApplication.EMAIL_USER)
	void testPostRequest() throws JsonProcessingException, Exception {
		Request request = new Request();
		request.setType("");
		
		UserDetailsImpl user = (UserDetailsImpl)userDetailsService.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_USER);
		request.setRequestedBy(user.getId());
		
		mvc.perform(post("/api/user/absence").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(request))).andExpect(status().isOk());
	}

	@Test
	@WithUserDetails(value = InvoiceTrackerBackendApplication.EMAIL_USER)
	void testGetAbsenceHistoryByEmployeeId() throws Exception {
		
		UserDetailsImpl user = (UserDetailsImpl)userDetailsService.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_USER);
		
		mvc.perform(get("/api/user/absence/request").param("empId", user.getId()+"")).andExpect(status().isOk());
	}

	@Test
	@WithUserDetails(value = InvoiceTrackerBackendApplication.EMAIL_HR)
	void testUpdateListOfRequests() throws JsonProcessingException, Exception {
		// Arrange
		UserDetailsImpl user = (UserDetailsImpl)userDetailsService.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_HR);

		String pattern = "yyyy-MM-dd";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		List<Request> absences = List.of(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), user.getId(), "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
				new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), user.getId(), "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
				new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), user.getId(), "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
				new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), user.getId(), "Sick leave", true, "Pending", "", new ArrayList<>(), 2)
				);

		// Act, Assert
		MvcResult result = mvc.perform(post("/api/user/absence/update-requests").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(absences))).andExpect(status().isOk()).andReturn();

		String content = result.getResponse().getContentAsString();
		Assertions.assertThat(content).isEqualTo(objectMapper.writeValueAsString(absences));
	}
}
