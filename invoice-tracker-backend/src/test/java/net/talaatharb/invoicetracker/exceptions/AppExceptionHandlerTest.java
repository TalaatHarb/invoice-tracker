package net.talaatharb.invoicetracker.exceptions;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import net.talaatharb.invoicetracker.dtos.MessageResponse;

class AppExceptionHandlerTest {

	private AppExceptionHandler appExceptionHandler;

	@BeforeEach
	void setup() {
		appExceptionHandler = new AppExceptionHandler();
	}

	@Test
	void testHandleUserException() {
		UserException e = new UserException("fail");
		ResponseEntity<MessageResponse> response = appExceptionHandler.handleUserException(e, null);
		assertEquals("error", response.getBody().getType());
		assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
	}

//	@Test
//	void testHandleDatabaseException() {
//		HibernateException e = new HibernateException("fail");
//		ResponseEntity<MessageResponse> response = appExceptionHandler.handleDatabaseException(e, null);
//		assertEquals("error", response.getBody().getType());
//		assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
//	}

}
