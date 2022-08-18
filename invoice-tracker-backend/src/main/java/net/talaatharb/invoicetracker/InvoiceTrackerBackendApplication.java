package net.talaatharb.invoicetracker;

import static net.talaatharb.invoicetracker.models.ERole.ROLE_ADMIN;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_EMPLOYEE;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_HR;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_USER;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashSet;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.service.UserService;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

	private static final String EMAIL_ADMIN_USER = "boogado2@yahoo.com";
	private static final String EMAIL_EMPLOYEE = "boogado4@yahoo.com";
	private static final String EMAIL_HR = "boogado1@yahoo.com";
	private static final String EMAIL_HR_2 = "boogado3@yahoo.com";
	private static final String EMAIL_USER = "boogado@yahoo.com";
	private static final String PASS_USER = "awad36148";
	private static final Boolean IS_ENABLED = true;
	private static final Date PASSWORD_EXPIRY_DATE = new GregorianCalendar(2022,Calendar.AUGUST,11).getTime();

	public static void main(String[] args) {
		SpringApplication.run(InvoiceTrackerBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, ROLE_USER));
			userService.saveRole(new Role(null, ROLE_HR));
			userService.saveRole(new Role(null, ROLE_EMPLOYEE));
			userService.saveRole(new Role(null, ROLE_ADMIN));

			userService.saveUser(new User(EMAIL_USER, null, PASS_USER, new HashSet<>(), "Gado",IS_ENABLED, PASSWORD_EXPIRY_DATE));
			userService.saveUser(new User(EMAIL_HR, null, PASS_USER, new HashSet<>(), "Gado1",IS_ENABLED, PASSWORD_EXPIRY_DATE));
			userService.saveUser(new User(EMAIL_ADMIN_USER, null, PASS_USER, new HashSet<>(), "Gado2",IS_ENABLED, PASSWORD_EXPIRY_DATE));
			userService.saveUser(new User(EMAIL_HR_2, null, PASS_USER, new HashSet<>(), "Gado3",IS_ENABLED, PASSWORD_EXPIRY_DATE));
			userService.saveUser(new User(EMAIL_EMPLOYEE, null, PASS_USER, new HashSet<>(), "Gado4",IS_ENABLED, PASSWORD_EXPIRY_DATE));

			userService.addRoleToUser(EMAIL_USER, ROLE_USER);
			userService.addRoleToUser(EMAIL_HR, ROLE_HR);
			userService.addRoleToUser(EMAIL_ADMIN_USER, ROLE_ADMIN);
			userService.addRoleToUser(EMAIL_HR_2, ROLE_HR);
			userService.addRoleToUser(EMAIL_EMPLOYEE, ROLE_EMPLOYEE);
			userService.addRoleToUser(EMAIL_ADMIN_USER, ROLE_USER);
		};
	}
}
