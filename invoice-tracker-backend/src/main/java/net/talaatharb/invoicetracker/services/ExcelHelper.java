package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.dtos.UserDto;
import net.talaatharb.invoicetracker.models.Team;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.TeamRepository;

@Service
@AllArgsConstructor
@Transactional
public class ExcelHelper {


    @Autowired
    private  final  TeamRepository teamRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;






    //check one User
    public  User add_employee_helper(UserDto income_user){

        try {

            User employee = new User();

            employee.setNationalId(income_user.getNationalId());
            employee.setEnglishName(income_user.getEnglishName());
            employee.setArabicName(income_user.getArabicName());
            employee.setEmail(income_user.getEmail());
            employee.setPassword(passwordEncoder.encode(income_user.getPassword()));
            employee.setEnglishAddress(income_user.getEnglishAddress());
            employee.setArabicAddress(income_user.getArabicAddress());
            employee.setAllowedBalance(income_user.getAllowedBalance());
            employee.setRemainingBalance(income_user.getAllowedBalance());
            employee.setBillable(income_user.isBillable());
            employee.setDisabled(income_user.isDisabled());
            employee.setJoiningDate(income_user.getJoiningDate());
            employee.setBirthDate(income_user.getBirthDate());
            employee.setMobileNumber(income_user.getMobileNumber());
            employee.setFullTime(income_user.isFullTime());

//            List<Team> teams = new ArrayList<>();
//            if(income_user.getTeams().size()>0)
//            teams = find_teams(income_user.getTeams());
//
//            employee.setTeams(teams);
            employee.setJopTitle(income_user.getJopTitle());
            employee.setUserId(income_user.getUserId());
            return employee;
        }
        catch(Exception e){
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }

    }


    private  List<Team> find_teams(List<String> income_teams_names)
    {
        System.out.println("hello find");
        List<Team> teams = new ArrayList<>() ;

        for(int i=0;i< income_teams_names.size();i++) {
            Optional<Team> team = teamRepository.findByName(income_teams_names.get(i));
            if(team.isPresent()) {
                Team team1 = new Team();
                team1 =  team.get();

                teams.add(team1);
                System.out.println(team.get().getName());
            }
        }
        return  teams;
    }

    public   void addteams(){
//        Company company = new Company("cegedim","cegedim@gmail.com","egypt");
//        Team team1 = new Team("team1",null,null);
//        Team team2 = new Team("team2",null,null);
//        Team team3 = new Team("team3",null,null);
//        teamRepository.save(team1);
//        teamRepository.save(team2);
//        teamRepository.save(team3);

    }

}




