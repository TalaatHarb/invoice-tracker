package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.EqualityTest;

class ResetBodyDTOTest implements EqualityTest<ResetBody>{

	@Override
	public ResetBody create() {
		ResetBody resetBody = new ResetBody();
		
		resetBody.setPassword("pass");
		resetBody.setResetToken("aaa");
		
		return resetBody;
	}

}
