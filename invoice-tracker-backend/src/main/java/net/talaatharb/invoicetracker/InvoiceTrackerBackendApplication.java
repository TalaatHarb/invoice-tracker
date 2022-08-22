package net.talaatharb.invoicetracker;

import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.services.UserService;
import net.talaatharb.invoicetracker.models.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

import static net.talaatharb.invoicetracker.models.ERole.*;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

	private static final String EMAIL_ADMIN_USER = "boogado2@yahoo.com";
	private static final String EMAIL_EMPLOYEE = "boogado@yahoo.com";
	private static final String EMAIL_HR = "boogado1@yahoo.com";
	private static final String EMAIL_HR_2 = "boogado3@yahoo.com";
	public static final String EMAIL_USER = "boogado4@yahoo.com";
	public static final String PASS_USER = "awad36148";

	public static void main(String[] args) {
		SpringApplication.run(InvoiceTrackerBackendApplication.class, args);
		System.out.println("Hello som3a");
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, ROLE_USER));
			userService.saveRole(new Role(null, ROLE_HR));
			userService.saveRole(new Role(null, ROLE_EMPLOYEE));
			userService.saveRole(new Role(null, ROLE_ADMIN));

			userService.saveUser(new User("2323232","Mohamed","N/A",EMAIL_HR,"12345678"));

			userService.addRoleToUser(EMAIL_HR, ROLE_HR);
		};
	}
}
