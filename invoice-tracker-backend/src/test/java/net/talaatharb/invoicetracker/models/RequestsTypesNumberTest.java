package net.talaatharb.invoicetracker.models;

import net.talaatharb.invoicetracker.EqualityTest;

class RequestsTypesNumberTest implements EqualityTest<RequestsTypesNumber>{

	@Override
	public RequestsTypesNumber create() {
		return new RequestsTypesNumber("request", 1);
	}

}
