package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.EqualityTest;

class ForgotBodyDTOTest implements EqualityTest<ForgotBody>{

	@Override
	public ForgotBody create() {
		ForgotBody forgotBody = new ForgotBody();
		
		forgotBody.setEmail("a@a.com");
		
		return forgotBody;
	}

}
