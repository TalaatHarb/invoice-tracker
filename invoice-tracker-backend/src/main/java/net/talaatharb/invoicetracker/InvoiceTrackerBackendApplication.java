package net.talaatharb.invoicetracker;

import static net.talaatharb.invoicetracker.models.ERole.ROLE_ADMIN;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_EMPLOYEE;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_HR;
import static net.talaatharb.invoicetracker.models.ERole.ROLE_USER;

import java.text.SimpleDateFormat;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import net.talaatharb.invoicetracker.models.*;
import net.talaatharb.invoicetracker.services.AbsenceService;
import net.talaatharb.invoicetracker.services.TeamService;
import net.talaatharb.invoicetracker.services.UserService;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

	public static final String USERNAME = "amr0";
	private static final String EMAIL_ADMIN_USER = "boogado2@yahoo.com";
	private static final String EMAIL_EMPLOYEE = "boogado@yahoo.com";
	public static final String EMAIL_HR = "boogado1@yahoo.com";
	private static final String EMAIL_HR_2 = "boogado3@yahoo.com";
	public static final String EMAIL_USER = "boogado4@yahoo.com";

	private static final String EMAIL_EMPLOYEE_2 = "boogado5@yahoo.com";
	private static final String EMAIL_EMPLOYEE_3 = "boogado6@yahoo.com";


	public static final String PASS_USER = "awad36148";
	
	private static final Date NONEXPIRED_DATE = new GregorianCalendar(2022,Calendar.AUGUST,11).getTime();
	private static final Date EXPIRED_DATE = new GregorianCalendar(2021,Calendar.AUGUST,11).getTime();



	private static final String REAL_EMAIL = "ahmedmohamed1263066@yahoo.com";

	@Autowired
	private TeamService teamService;
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
			SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
			String joinDate = "13-jul-2022";
			String endDate = "25-aug-2022";
			Date jdate = formatter.parse(joinDate);
			Date edate = formatter.parse(endDate);


			userService.saveUser(new User(EMAIL_USER, PASS_USER,21,21,jdate,"0122303432","amr0"));
			userService.saveUser(new User(EMAIL_EMPLOYEE, PASS_USER,21,21,new Date(),"0122303432","Gado"));
			userService.saveUser(new User(EMAIL_HR, PASS_USER,"Ahmed",true));
			userService.saveUser(new User("124329374621","Amr Essam","عمرو عصام",EMAIL_ADMIN_USER,PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,21,true,jdate,edate,new Date(),"01002345324",2,0,150.0,"amr23"));

			userService.saveUser(new User(EMAIL_HR_2, PASS_USER,"hamada",false));
			
			userService.saveUser(new User(EMAIL_EMPLOYEE_2, PASS_USER,"hamada",false,NONEXPIRED_DATE)); //DISABLED User
			userService.saveUser(new User(EMAIL_EMPLOYEE_3, PASS_USER,"Sayed",true,EXPIRED_DATE));		//Expired Password User




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


			userService.saveRequestType(new RequestType("Emergency",new ArrayList<>()));
			userService.saveRequestType(new RequestType("Sick Leave",new ArrayList<>()));
            userService.saveRequestType(new RequestType("Maternity",new ArrayList<>()));

			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

			long l=2;
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"Maternity",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"Sick Leave",4));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"Sick Leave",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"Sick Leave",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"Emergency",2));

			// SAMIR
			for(int i = 1; i <= 7; ++i) {
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long) i, "Emergency", true, "Pending", "", new ArrayList<>(), 2));
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)i, "Sick Leave", true, "Pending", "I need to stay at home, I have COVID!", new ArrayList<>(), 2));
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)i, "Maternity", true, "Pending", "I'm tired today, I need some rest", new ArrayList<>(), 2));
            }

			teamService.SaveTeam(new Team("IT",new Company("Cegedim","cegedim@gmail.com","Egypt,Cairo")));
			teamService.SaveTeam(new Team("DevOps",new Company("Cegedim","cegedim@gmail.com","Egypt,Cairo")));
			teamService.SaveTeam(new Team("Software Engineer",new Company("Cegedim","cegedim@gmail.com","Egypt,Cairo")));
		};
	}
}
