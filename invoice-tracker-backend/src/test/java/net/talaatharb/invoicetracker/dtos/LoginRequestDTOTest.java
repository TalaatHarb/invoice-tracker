package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.EqualityTest;

public class LoginRequestDTOTest implements EqualityTest<LoginRequest>{

	@Override
	public LoginRequest create() {
		LoginRequest loginRequest = new LoginRequest();
		loginRequest.setEmail("a@a.com");
		loginRequest.setPassword("password");
		
		return loginRequest;
	}

}
