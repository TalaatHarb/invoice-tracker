package net.talaatharb.invoicetracker.models;

import java.util.ArrayList;

import net.talaatharb.invoicetracker.EqualityTest;

class RequestTypeTest implements EqualityTest<RequestType> {

	@Override
	public RequestType create() {
		return new RequestType("type", new ArrayList<>());
	}

}
