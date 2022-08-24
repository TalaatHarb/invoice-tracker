package net.talaatharb.invoicetracker;

import static net.talaatharb.invoicetracker.models.ERole.ROLE_ADMIN;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_EMPLOYEE;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_HR;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_USER;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.models.RequestType;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.services.AbsenceService;
import net.talaatharb.invoicetracker.services.UserService;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

	private static final String EMAIL_ADMIN_USER = "boogado2@yahoo.com";
	private static final String EMAIL_EMPLOYEE = "boogado@yahoo.com";
	private static final String EMAIL_HR = "boogado1@yahoo.com";
	private static final String EMAIL_HR_2 = "boogado3@yahoo.com";
	public static final String EMAIL_USER = "boogado4@yahoo.com";

	private static final String EMAIL_EMPLOYEE_2 = "boogado5@yahoo.com";

	public static final String PASS_USER = "awad36148";
	
	private static final Boolean IS_ENABLED = true;
	private static final Date PASSWORD_EXPIRY_DATE = new GregorianCalendar(2022,Calendar.AUGUST,11).getTime();

	public static void main(String[] args) {
		SpringApplication.run(InvoiceTrackerBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserService userService, AbsenceService absenceService) {
		return args -> {
			userService.saveRole(new Role(null, ROLE_USER));
			userService.saveRole(new Role(null, ROLE_HR));
			userService.saveRole(new Role(null, ROLE_EMPLOYEE));
			userService.saveRole(new Role(null, ROLE_ADMIN));

//			create new object of User Class

			userService.saveUser(new User(EMAIL_USER, PASS_USER,21,21,new Date(),"0122303432","amr0"));
			userService.saveUser(new User(EMAIL_EMPLOYEE, PASS_USER,21,21,new Date(),"0122303432","Gado"));
			userService.saveUser(new User(EMAIL_HR, PASS_USER,"Ahmed",true));
			userService.saveUser(new User("124329374621","Amr Essam","عمرو عصام",EMAIL_ADMIN_USER,PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,21,true,new Date(),new Date(),new Date(),"01002345324",2,0,150.0,"amr23"));

			userService.saveUser(new User(EMAIL_HR_2, PASS_USER,"hamada",false));

			userService.saveUser(new User(EMAIL_EMPLOYEE_2, PASS_USER,"hamada",IS_ENABLED,PASSWORD_EXPIRY_DATE));


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




			userService.saveRequestType(new RequestType("sickness",new ArrayList<>()));
			userService.saveRequestType(new RequestType("vacation",new ArrayList<>()));
			userService.saveRequestType(new RequestType("troll",new ArrayList<>()));

			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

			long l=2;
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"sickness",4));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"sickness",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"vacation",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"troll",2));
		};
	}
}
