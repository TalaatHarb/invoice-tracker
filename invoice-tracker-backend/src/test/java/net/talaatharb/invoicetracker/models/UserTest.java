package net.talaatharb.invoicetracker.models;//package net.talaatharb.invoicetracker.models;

import net.talaatharb.invoicetracker.EqualityTest;

public class UserTest implements EqualityTest<User> {

	@Override
	public User create() {
		return new User("user","a@a.com", "");
	}

}
