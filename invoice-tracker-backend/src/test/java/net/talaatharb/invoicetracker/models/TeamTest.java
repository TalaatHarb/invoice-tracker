package net.talaatharb.invoicetracker.models;

import java.util.ArrayList;

import net.talaatharb.invoicetracker.EqualityTest;

class TeamTest implements EqualityTest<Team> {

	@Override
	public Team create() {
		return new Team(1L, "team", new Company(), new ArrayList<>());
	}

}
