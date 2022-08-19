package net.talaatharb.invoicetracker.dtos;

import java.util.ArrayList;

public class JwtResponseDTOTest implements EqualityTest<JwtResponse>{

	@Override
	public JwtResponse create() {
		return new JwtResponse("a@a.com", 1L, 1L, new ArrayList<String>(), "",
				"user");
	}

}
