package net.talaatharb.invoicetracker;

import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.HashSet;

import static net.talaatharb.invoicetracker.models.ERole.*;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

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

//			new empty hashmap
			ArrayList<Role> roles = new ArrayList<>();

			userService.saveUser(new User(null,"Gado","boogado@yahoo.com", "awad36148",new HashSet<>()));
			userService.saveUser(new User(null,"Gado1","boogado1@yahoo.com", "awad36148",new HashSet<>()));
			userService.saveUser(new User(null,"Gado2","boogado2@yahoo.com", "awad36148",new HashSet<>()));
			userService.saveUser(new User(null,"Gado3","boogado3@yahoo.com", "awad36148",new HashSet<>()));
			userService.saveUser(new User(null,"Gado4","boogado4@yahoo.com", "awad36148",new HashSet<>()));


			userService.addRoleToUser("boogado@yahoo.com", ROLE_USER);
			userService.addRoleToUser("boogado1@yahoo.com", ROLE_HR);
			userService.addRoleToUser("boogado2@yahoo.com", ROLE_ADMIN);
			userService.addRoleToUser("boogado3@yahoo.com", ROLE_HR);
			userService.addRoleToUser("boogado4@yahoo.com", ROLE_EMPLOYEE);
			userService.addRoleToUser("boogado2@yahoo.com", ROLE_USER);
		};
	}
}
