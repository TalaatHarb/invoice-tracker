package net.talaatharb.invoicetracker.dtos;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {

    private String token;
    private Long id;
    private String username;
    private String email;
    private Long expiryTime;
    private List<String> roles;
}
