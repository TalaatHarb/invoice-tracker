package net.talaatharb.invoicetracker.models;

public class RoleTest implements EqualityTest<Role>{

	@Override
	public Role create() {
		return new Role(1L, ERole.ROLE_USER);
	}

}
