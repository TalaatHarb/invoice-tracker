package net.talaatharb.invoicetracker.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class JwtResponse {

	private String email;
	private Long expiryTime;
	private Long id;
	private List<String> roles;
	private String token;
	private String username;
}
