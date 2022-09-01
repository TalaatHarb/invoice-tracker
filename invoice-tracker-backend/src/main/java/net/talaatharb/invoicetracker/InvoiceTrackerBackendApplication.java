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
	public static final String EMAIL_HR = "boogado1@yahoo.com";
	private static final String EMAIL_HR_2 = "boogado3@yahoo.com";
	private static final String EMAIL_HR_8 = "boogado33@yahoo.com";
	public static final String EMAIL_USER = "boogado4@yahoo.com";
	public static final String EMAIL_USER_MO= "esmailmostafa295@gmail.com";
	private static final String EMAIL_EMPLOYEE_2 = "boogado5@yahoo.com";
	private static final String EMAIL_EMPLOYEE_3 = "boogado6@yahoo.com";
	private static final String EMAIL_EMPLOYEE_4 = "boogado66@yahoo.com";


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



			userService.saveUser(new User("124329374578","Mohamed Zakaria","محمد زكريا",EMAIL_USER, PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,15,true,jdate,edate,new Date(),"01002345324",2,0,150.0,"amr0",true,NONEXPIRED_DATE,"Developer"));
			userService.saveUser(new User("124329374566","Mohamed Gado","محمد جادو",EMAIL_EMPLOYEE, PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,7,true,jdate,edate,new Date(),"01002345324",2,0,150.0,"gado",true,NONEXPIRED_DATE,"Tester"));
			userService.saveUser(new User("124329374578","Ahmed","احمد",EMAIL_HR, PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,2,true,jdate,edate,new Date(),"01002345324",2,0,150.0,"Ahmed",true,NONEXPIRED_DATE,"IT"));
			userService.saveUser(new User("124329374621","Amr Essam","عمرو عصام",EMAIL_ADMIN_USER,PASS_USER,"Cairo,Egypt","القاهرة،مصر",5,15,false,jdate2,edate2,new Date(),"01002345324",2,0,150.0,"amr23",true,NONEXPIRED_DATE,"Developer"));
			userService.saveUser(new User("124329374579","Mostafa","مصطفى",EMAIL_HR_2, PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,4,true,jdate2,edate2,new Date(),"01002345324",2,0,150.0,"hamada",false,NONEXPIRED_DATE,"Product Owner"));
			userService.saveUser(new User("124329374579","Mostafa Som3aa","مصطفى",EMAIL_USER_MO, PASS_USER,"Menoufia,Egypt","المنوفية،مصر",21,4,true,jdate2,edate2,new Date(),"01002345324",2,0,150.0,"hamada",true,NONEXPIRED_DATE,"CEO"));


			userService.saveUser(new User("124329374580","Hamada","حمادة",EMAIL_EMPLOYEE_2, PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,21,true,jdate,edate2,new Date(),"01002345324",2,0,150.0,"hamada",false,NONEXPIRED_DATE,"Developer")); //DISABLED User
			userService.saveUser(new User("124329374581","Sayed","سيد",EMAIL_EMPLOYEE_3, PASS_USER,"Cairo,Egypt","القاهرة،مصر",21,9,false,jdate2,edate,new Date(),"01002345324",2,0,150.0,"Sayed",true,EXPIRED_DATE,"Tester"));		//Expired Password User




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
			userService.addRoleToUser(EMAIL_USER_MO, ROLE_EMPLOYEE);


			userService.saveRequestType(new RequestType("sick leave",new ArrayList<>()));
			userService.saveRequestType(new RequestType("bereavement leave",new ArrayList<>()));
			userService.saveRequestType(new RequestType("annual leave",new ArrayList<>()));

			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

			long l=2;
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"annual leave",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"sick leave",4));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"sick leave",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"sick leave",2));
			absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"),simpleDateFormat.parse("2018-09-09"),l,"bereavement leave",2));

			// SAMIR
			for(int i = 1; i <= 8; ++i) {
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long) i, "sick leave", true, "Accepted", "", new ArrayList<>(), 1));
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)i, "sick leave", true, "Pending", "Hi, I have COVID and I need some rest", new ArrayList<>(), 1));
                absenceService.postRequest(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)i, "bereavement leave", true, "Pending", "Hi, I'm very tired today and I need some rest", new ArrayList<>(), 1));
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
