package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.EqualityTest;

public class MessageResponseDTOTest implements EqualityTest<MessageResponse> {

	@Override
	public MessageResponse create() {
		return new MessageResponse("message");
	}
}
