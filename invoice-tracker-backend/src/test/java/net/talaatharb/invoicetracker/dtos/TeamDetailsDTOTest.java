package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.EqualityTest;

class TeamDetailsDTOTest implements EqualityTest<TeamDetails>{

	@Override
	public TeamDetails create() {
		return new TeamDetails(1L, "team");
	}

}
