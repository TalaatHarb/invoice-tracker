package net.talaatharb.invoicetracker.controllers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;

import net.talaatharb.invoicetracker.InvoiceTrackerBackendApplication;
import net.talaatharb.invoicetracker.api.AbstractControllerIT;
import net.talaatharb.invoicetracker.dtos.LoginRequest;

class AuthControllerIT extends AbstractControllerIT {

	@Test
	void testTryingLoginWithoutBody() throws Exception {
		mvc.perform(post("/api/auth/login")).andExpect(status().isBadRequest());
	}

	@Test
	void testTryLoginWithValidCredintialsInBody() throws Exception {
		// check this for guidance
		// https://github.com/TalaatHarb/patient-management-system/blob/develop/patient-management-system-backend/src/test/java/net/talaatharb/patientmanagementsystem/api/controller/PatientManagementSystemRestControllerTest.java
		final LoginRequest loginRequest = new LoginRequest();
		loginRequest.setEmail(InvoiceTrackerBackendApplication.EMAIL_USER);
		loginRequest.setPassword(InvoiceTrackerBackendApplication.PASS_USER);

		mvc.perform(post("/api/auth/login").contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(objectMapper.writeValueAsString(loginRequest))).andExpect(status().isOk());
	}

}
