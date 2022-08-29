package net.talaatharb.invoicetracker.models;

import java.util.ArrayList;

import net.talaatharb.invoicetracker.EqualityTest;

class CompanyTest implements EqualityTest<Company> {

	@Override
	public Company create() {
		return new Company(1L, "company", "a@a.com", "", new ArrayList<>());
	}

}
