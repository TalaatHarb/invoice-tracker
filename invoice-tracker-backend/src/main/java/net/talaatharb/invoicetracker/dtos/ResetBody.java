package net.talaatharb.invoicetracker.dtos;

import lombok.Data;

@Data
public class ResetBody {

	private String password;
	private String resetToken;

}
