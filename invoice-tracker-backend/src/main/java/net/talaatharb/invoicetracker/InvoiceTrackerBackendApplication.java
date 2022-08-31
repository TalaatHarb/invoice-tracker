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
import net.talaatharb.invoicetracker.services.FilterUserServiceImp;
import net.talaatharb.invoicetracker.services.TeamService;
import net.talaatharb.invoicetracker.services.UserService;

@SpringBootApplication
public class InvoiceTrackerBackendApplication {

	public static final String USERNAME = "amr0";
	private static final String EMAIL_ADMIN_USER = "boogado2@yahoo.com";
	private static final String EMAIL_ADMIN_USER2 = "boogado222@yahoo.com";
	private static final String EMAIL_ADMIN_USER3= "boogado2223@yahoo.com";
	private static final String EMAIL_ADMIN_USER4 = "boogado2224@yahoo.com";
	private static final String EMAIL_EMPLOYEE = "boogado@yahoo.com";
	private static final String EMAIL_HR = "boogado1@yahoo.com";
	private static final String EMAIL_HR_2 = "boogado3@yahoo.com";
	public static final String EMAIL_USER = "boogado4@yahoo.com";

	private static final String EMAIL_EMPLOYEE_2 = "boogado5@yahoo.com";
	private static final String EMAIL_EMPLOYEE_3 = "boogado6@yahoo.com";


	public static final String PASS_USER = "awad36148";
	
	private static final Date NONEXPIRED_DATE = new GregorianCalendar(2022,Calendar.AUGUST,11).getTime();
	private static final Date EXPIRED_DATE = new GregorianCalendar(2021,Calendar.AUGUST,11).getTime();

	private static final Boolean IS_ENABLED = true;
	private static final Date PASSWORD_EXPIRY_DATE = new GregorianCalendar(2022,Calendar.AUGUST,11).getTime();

	private static final String REAL_EMAIL = "ahmedmohamed1263066@yahoo.com";

	@Autowired
	private TeamService teamService;

	@Autowired
	private FilterUserServiceImp filterUserServiceImp;


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
			String joinDate2 = "22-jul-2022";
			String endDate2 = "18-aug-2022";
			Date jdate = formatter.parse(joinDate);
			Date edate = formatter.parse(endDate);
			Date jdate2 = formatter.parse(joinDate2);
			Date edate2 = formatter.parse(endDate2);


			userService.saveUser(new User(EMAIL_USER, PASS_USER,"124329374633","Moustafa","مصطفى","Menofia,Egypt","المنوفية،مصر","Developer",21,21,jdate,edate,"0122303432","amr0"));
			userService.saveUser(new User(EMAIL_EMPLOYEE, PASS_USER,"124329374621","ِAbdelrahman","عبدالرحمن","Alex,Egypt","الاسكندرية،مصر","Developer",21,21,jdate,edate,"0122303432","Gado"));

			userService.saveUser(new User(EMAIL_HR, PASS_USER,"Ahmed",true,"124329366621","Khaled","خالد","Cairo,Egypt","القاهرة،مصر","Developer",21,15,true,jdate2,edate2));

			userService.saveUser(new User("129329374621","Amr Essam","عمرو عصام",EMAIL_ADMIN_USER,PASS_USER,"Cairo,Egypt","القاهرة،مصر","Developer",21,21,true,jdate2,edate,new Date(),"01002345324",2,0,150.0,"amr23"));
			userService.saveUser(new User("124329795669","Ahmed Ali","احمد علي",EMAIL_ADMIN_USER2,PASS_USER,"Cairo,Egypt","القاهرة،مصر","DevOps",21,21,true,jdate,edate,new Date(),"010023444424",2,0,150.0,"ahmed22"));
			userService.saveUser(new User("124324474621","Omar Aly","عمر علي",EMAIL_ADMIN_USER3,PASS_USER,"Cairo,Egypt","القاهرة،مصر","Tester",21,10,false,jdate,edate2,new Date(),"01002345324",2,0,150.0,"amr24"));
			userService.saveUser(new User("124322234621","Mahmoud Mohamed","محمود محمد",EMAIL_ADMIN_USER4,PASS_USER,"Cairo,Egypt","القاهرة،مصر","Developer",21,21,true,jdate2,edate,new Date(),"01002345324",2,0,150.0,"amr25"));


			userService.saveUser(new User(EMAIL_HR_2, PASS_USER,"hamada",false,"124329374621","Moataz","معتز","Cairo,Egypt","القاهرة،مصر","Tester",21,15,true,jdate,edate));
			userService.saveUser(new User(REAL_EMAIL, PASS_USER,"mostafa",true,"124329374621","Mohamed","محمد","Cairo,Egypt","القاهرة،مصر","Developer",21,15,true,jdate2,edate));
			userService.saveUser(new User(EMAIL_EMPLOYEE_2, PASS_USER,"hamada",IS_ENABLED,PASSWORD_EXPIRY_DATE,"1243567874621","Omar Fathy","عمر فتحي","Cairo,Egypt","القاهرة،مصر","Tester",21,5,true,jdate,edate));


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
			userService.saveRequestType(new RequestType("Annual leave",new ArrayList<>()));

			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

			long l=2;
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"Annual leave",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"sickness",4));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"sickness",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"vacation",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"troll",2));

			// SAMIR
			for(int i = 1; i <= 7; ++i) {
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long) i, "sickness", true, "Accepted", "", new ArrayList<>(), 2));
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)i, "sickness", true, "Pending", "Hi, This is a comment", new ArrayList<>(), 2));
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)i, "sickness", true, "Rejected", "Hi again, this is the second comment", new ArrayList<>(), 2));
            }
			Team  team1 = new Team("Team A",new Company("Cegedim","cegedim@gmail.com","Egypt,Cairo"));
			Team  team2 = new Team("Team B",new Company("Cegedim","cegedim@gmail.com","Egypt,Cairo"));
			Team  team3 = new Team("Team C",new Company("Cegedim","cegedim@gmail.com","Egypt,Cairo"));


			teamService.SaveTeam(team1);
			teamService.SaveTeam(team2);
			teamService.SaveTeam(team3);

			filterUserServiceImp.mockData();
		};



	}
}
