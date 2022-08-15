package net.talaatharb.invoicetracker;

import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvoiceTrackerBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_MANAGER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
			userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

			userService.saveUser(new User("boogado@yahoo.com","Gado","mgado0","1234", new ArrayList<>()));
			userService.saveUser(new User("boogado1@yahoo.com","Gado1","mgado1","1234", new ArrayList<>()));
			userService.saveUser(new User("boogado2@yahoo.com","Gado2","mgado2","1234", new ArrayList<>()));
			userService.saveUser(new User("boogado3@yahoo.com","Gado3","mgado3","1234", new ArrayList<>()));
			userService.saveUser(new User("boogado4@yahoo.com","Gado4","mgado4","1234", new ArrayList<>()));
			userService.saveUser(new User("boogado5@yahoo.com","Gado5","mgado5","1234", new ArrayList<>()));

			userService.addRoleToUser("boogado@yahoo.com", "ROLE_USER");
			userService.addRoleToUser("boogado1@yahoo.com", "ROLE_MANAGER");
			userService.addRoleToUser("boogado2@yahoo.com", "ROLE_ADMIN");
			userService.addRoleToUser("boogado3@yahoo.com", "ROLE_SUPER_ADMIN");
			userService.addRoleToUser("boogado4@yahoo.com", "ROLE_ADMIN");
			userService.addRoleToUser("boogado2@yahoo.com", "ROLE_USER");
		};
	}

}
