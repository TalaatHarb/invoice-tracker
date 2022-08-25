package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.EqualityTest;
import net.talaatharb.invoicetracker.models.Request;

class ManagerRequestDTOTest implements EqualityTest<ManagerRequest> {

	@Override
	public ManagerRequest create() {
		return new ManagerRequest("User", new Request());
	}

}
