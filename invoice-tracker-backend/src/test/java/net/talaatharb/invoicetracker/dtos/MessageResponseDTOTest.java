package net.talaatharb.invoicetracker.dtos;

public class MessageResponseDTOTest implements EqualityTest<MessageResponse>{

	@Override
	public MessageResponse create() {
		return new MessageResponse("message");
	}

}
