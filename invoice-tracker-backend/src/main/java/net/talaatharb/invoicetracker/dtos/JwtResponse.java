package net.talaatharb.invoicetracker.dtos;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

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
