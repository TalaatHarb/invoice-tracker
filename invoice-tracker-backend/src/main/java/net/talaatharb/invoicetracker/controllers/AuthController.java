package net.talaatharb.invoicetracker.controllers;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import net.talaatharb.invoicetracker.dtos.JwtResponse;
import net.talaatharb.invoicetracker.dtos.LoginRequest;
import net.talaatharb.invoicetracker.repositories.RoleRepositry;
import net.talaatharb.invoicetracker.repositories.UserRepository;
import net.talaatharb.invoicetracker.security.JwtProperties;
import net.talaatharb.invoicetracker.security.JwtUtils;
import net.talaatharb.invoicetracker.services.UserDetailsImpl;

@CrossOrigin(origins = "*" , maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	private static final String ERROR_ROLE_IS_NOT_FOUND = "Error: Role is not found.";
	private static final String USER_REGISTERED_SUCCESSFULLY = "User registered successfully!";
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired

	PasswordEncoder encoder;
	@Autowired

	JwtUtils jwtUtils;
	@Autowired

	RoleRepositry roleRepository;
	@Autowired
	UserRepository userRepository;

	@PostMapping("/login")
	public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		long expiresIn = new Date((new Date()).getTime() + JwtProperties.EXPIRATION_TIME).getTime();

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();

		return ResponseEntity.ok(new JwtResponse(userDetails.getEmail(), expiresIn, userDetails.getId(), roles, jwt,
				userDetails.getUsername()));
	}
}
