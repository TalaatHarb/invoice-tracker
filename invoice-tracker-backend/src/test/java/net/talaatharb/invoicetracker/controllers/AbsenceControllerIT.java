package net.talaatharb.invoicetracker.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonProcessingException;

import net.talaatharb.invoicetracker.InvoiceTrackerBackendApplication;
import net.talaatharb.invoicetracker.api.AbstractControllerIT;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.services.UserDetailsImpl;

class AbsenceControllerIT extends AbstractControllerIT {
	
	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private WebApplicationContext webApplicationContext;

	@Test
//	@Disabled
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
//	@Disabled
	@WithUserDetails(value = InvoiceTrackerBackendApplication.EMAIL_USER)
	void testPostAttachments() throws JsonProcessingException, Exception {

		MockMultipartFile file
				= new MockMultipartFile(
				"attachments",
				"hello.png",
				MediaType.IMAGE_PNG_VALUE,
				"Hello, World!".getBytes()
		);
		UserDetailsImpl user = (UserDetailsImpl)userDetailsService.loadUserByUsername(InvoiceTrackerBackendApplication.EMAIL_USER);


		MockMvc mockMvc
				= MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
		mockMvc.perform(MockMvcRequestBuilders.multipart("/api/attachments/upload?reqId=1").file(file))
				.andExpect(status().isOk());
	}
}
