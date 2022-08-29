package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;

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

            List<Team> teams = new ArrayList<>();
            if(income_user.getTeams().size()>0)
            teams = find_teams(income_user.getTeams());

            employee.setTeams(teams);
            employee.setJobTitle(income_user.getJopTitle());
            employee.setUserId(income_user.getUserId());

            System.out.println("heelo1");
            return employee;
        }
        catch(Exception e){
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }

    }


    private  List<Team> find_teams(List<String> income_teams_names)
    {
        List<Team> teams = teamRepository.findAll();


        List<Team> teams2 = new ArrayList<>();
        if(!teams.isEmpty()){
            for(int i=0;i< teams.size();i++)
            {
                if(teams.get(i).getName().equals(income_teams_names.get(0)))
                {
                    teams2.add(teams.get(i));
                }
            }


        }

        return  teams2;
    }



}




