package net.talaatharb.invoicetracker;

import static net.talaatharb.invoicetracker.models.ERole.*;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.services.UserService;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

	private static final String EMAIL_ADMIN_USER = "boogado2@yahoo.com";
	private static final String EMAIL_EMPLOYEE = "boogado@yahoo.com";
	private static final String EMAIL_HR = "boogado1@yahoo.com";
	private static final String EMAIL_HR_2 = "boogado3@yahoo.com";
	public static final String EMAIL_USER = "boogado4@yahoo.com";
	public static final String PASS_USER = "awad36148";

	private static final String REAL_EMAIL = "esmailmostafa295@gmail.com";

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

//			create new object of User Class
			userService.saveUser(new User(EMAIL_USER, PASS_USER,"amr",false));
			userService.saveUser(new User(EMAIL_EMPLOYEE, PASS_USER,"Gado",true));
			userService.saveUser(new User(EMAIL_HR, PASS_USER,"Ahmed",true));
			userService.saveUser(new User(EMAIL_ADMIN_USER, PASS_USER,"mostafa",true));
			userService.saveUser(new User(EMAIL_HR_2, PASS_USER,"hamada",false));
			userService.saveUser(new User(REAL_EMAIL, PASS_USER,"mostafa",false));

//			userService.saveUser(new User(EMAIL_HR, null, PASS_USER, new HashSet<>(), "Gado1"));
//			userService.saveUser(new User(EMAIL_ADMIN_USER, null, PASS_USER, new HashSet<>(), "Gado2"));
//			userService.saveUser(new User(EMAIL_HR_2, null, PASS_USER, new HashSet<>(), "Gado3"));
//			userService.saveUser(new User(EMAIL_EMPLOYEE, null, PASS_USER, new HashSet<>(), "Gado4"));
//
			userService.addRoleToUser(EMAIL_USER, ROLE_USER);
			userService.addRoleToUser(EMAIL_HR, ROLE_HR);
			userService.addRoleToUser(EMAIL_ADMIN_USER, ROLE_ADMIN);
			userService.addRoleToUser(EMAIL_HR_2, ROLE_HR);
			userService.addRoleToUser(EMAIL_EMPLOYEE, ROLE_EMPLOYEE);
			userService.addRoleToUser(EMAIL_ADMIN_USER, ROLE_USER);
		};
	}
}
