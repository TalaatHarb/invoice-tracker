package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.EqualityTest;

class UserDetailsDTOTest implements EqualityTest<UserDetails>{

	@Override
	public UserDetails create() {
		UserDetails userDetails = new UserDetails();
		
		userDetails.setEmail("a@a.com");
		userDetails.setEmployeeId(1L);
		userDetails.setId(1L);
		
		return userDetails;
	}

}
