package net.talaatharb.invoicetracker.dtos;

import java.util.HashSet;

import net.talaatharb.invoicetracker.EqualityTest;

public class SignUpRequestDTOTest implements EqualityTest<SignUpRequest>{

	@Override
	public SignUpRequest create() {
		SignUpRequest signUpRequest = new SignUpRequest();
		signUpRequest.setEmail("a@a.com");
		signUpRequest.setPassword("password");
		signUpRequest.setRole(new HashSet<String>());
		signUpRequest.setUsername("user");
		
		return signUpRequest;
	}

}
