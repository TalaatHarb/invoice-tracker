package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.talaatharb.invoicetracker.dtos.TeamDetails;
import net.talaatharb.invoicetracker.dtos.UserDetails;
import net.talaatharb.invoicetracker.models.Team;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.FilterUserRepository;
import net.talaatharb.invoicetracker.repositories.TeamRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository;

@Service
public class FilterUserServiceImp implements FilterUserService{


    @Autowired
    FilterUserRepository filterUserRepository;

    @Autowired
    private  final TeamRepository teamRepository;

    @Autowired
    private  final UserRepository userRepository;

    public FilterUserServiceImp(FilterUserRepository filterUserRepository, TeamRepository teamRepository, UserRepository userRepository) {
        this.filterUserRepository = filterUserRepository;
        this.teamRepository = teamRepository;
        this.userRepository = userRepository;

    }

    @Override
    public List<User> filterEmployeeByName(List<String> names) {

        List<User>userList=filterUserRepository.filterEmployeesByName(names);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByArabicName(List<String> arabicName) {

        List<User>userList=filterUserRepository.filterEmployeesByArabicName(arabicName);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByJobTitle(List<String> jobTitle) {

        List<User>userList=filterUserRepository.filterEmployeesByJobTitle(jobTitle);

        return userList;
    }



    public List<User> filterEmployeeById(List<Long> id) {

        List<User>userList=filterUserRepository.filterEmployeesById(id);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByBalance(List<Integer> balance) {

        List<User>userList=filterUserRepository.filterEmployeesByBalance(balance);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByRemainBalance(List<Integer> remainBalance) {

        List<User>userList=filterUserRepository.filterEmployeesByRemainBalance(remainBalance);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByJoinDate(Date JoinDate) {

        List<User>userList=filterUserRepository.filterEmployeesByJoinDate(JoinDate);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByEndDate(Date endDate) {

        List<User>userList=filterUserRepository.filterEmployeesByEndDate(endDate);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByBillable(boolean billable) {

        List<User>userList=filterUserRepository.filterEmployeesByBillable(billable);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByISDisabled(boolean isDisabled) {

        List<User>userList=filterUserRepository.filterEmployeesByIsDisabled(isDisabled);

        return userList;
    }

    @Override
    public List<User> filterEmployeeByISFullTime(boolean isFullTime) {

        List<User>userList=filterUserRepository.filterEmployeesByIsFullTime(isFullTime);

        return userList;
    }

    @Override
    public List<UserDetails> convert_user_userdto(List<User> userList) {

        List<UserDetails> collectUsers = new ArrayList<>();
        //System.out.println(userList.get(0).getEnglishName());
        if(userList.size()>0) {
            for (int i = 0; i < userList.size(); i++) {
                UserDetails userDetails = new UserDetails();
                userDetails.setId(userList.get(i).getId());
                userDetails.setBillable(userList.get(i).isBillable());
                userDetails.setArabicName(userList.get(i).getArabicName());
                userDetails.setEnglishName(userList.get(i).getEnglishName());
                userDetails.setEnglishAddress(userList.get(i).getEnglishAddress());
                userDetails.setArabicAddress(userList.get(i).getArabicAddress());
                userDetails.setNationalId(userList.get(i).getNationalId());
                userDetails.setJobTitle(userList.get(i).getJobTitle());
                userDetails.setJoiningDate(userList.get(i).getJoiningDate());
                userDetails.setEndDate(userList.get(i).getEndDate());
                userDetails.setAllowedBalance(userList.get(i).getAllowedBalance());
                userDetails.setRemainingBalance(userList.get(i).getRemainingBalance());
                userDetails.setDisabled(userList.get(i).isDisabled());
                userDetails.setFullTime(userList.get(i).isFullTime());

                ArrayList<TeamDetails> teamsDetails = new ArrayList<>();

                for (Team team : userList.get(i).getTeams()) {
                    TeamDetails teamDetails = new TeamDetails();
                    teamDetails.setId(team.getId());
                    teamDetails.setName(team.getName());
                    teamsDetails.add(teamDetails);
                }
                userDetails.setTeam(teamsDetails);

                //add user
                collectUsers.add(userDetails);
            }
        }
        return  collectUsers;
    }

    @Override
    public List<User> FindUsersByTeamsName(List<String> teams_name) {


        List<User> users = userRepository.findAll();
        List<User> users2= new ArrayList<>();

        for(int i=0;i<users.size();i++)
        {
               if(users.get(i).getTeams().size()>0) {

                   if (users.get(i).getTeams().get(0).getName().equals(teams_name.get(0))) {
                       users2.add(users.get(i));
                   }
               }
        }


        return  users2;

    }
//set mock data to teams
    public void mockData()
    {
        User user = userRepository.findById(4L).get();
        Team team = teamRepository.findById(2l).get();
        user.getTeams().add(team);
        userRepository.save(user);

        User user1 = userRepository.findById(1L).get();
        Team team1 = teamRepository.findById(1l).get();
        user1.getTeams().add(team1);
        userRepository.save(user1);

        User user2 = userRepository.findById(3L).get();
        Team team2 = teamRepository.findById(2l).get();
        user2.getTeams().add(team2);
        userRepository.save(user2);

        User user3 = userRepository.findById(2L).get();
        Team team3 = teamRepository.findById(1l).get();
        user3.getTeams().add(team3);
        userRepository.save(user3);

        User user4 = userRepository.findById(5L).get();
        Team team4 = teamRepository.findById(3l).get();
        user4.getTeams().add(team4);
        userRepository.save(user4);

        User user5 = userRepository.findById(6L).get();
        Team team5 = teamRepository.findById(3l).get();
        user5.getTeams().add(team5);
        userRepository.save(user5);

        User user6 = userRepository.findById(7L).get();
        Team team6 = teamRepository.findById(2l).get();
        user6.getTeams().add(team6);
        userRepository.save(user6);

        User user7 = userRepository.findById(8L).get();
        Team team7 = teamRepository.findById(1l).get();
        user7.getTeams().add(team7);
        userRepository.save(user7);
//
//        User user8 = userRepository.findById(9L).get();
//        Team team8 = teamRepository.findById(3l).get();
//        user8.getTeams().add(team8);
//        userRepository.save(user8);
//
//        User user9 = userRepository.findById(10L).get();
//        Team team9 = teamRepository.findById(2l).get();
//        user9.getTeams().add(team9);
//        userRepository.save(user9);
//
//        User user10 = userRepository.findById(11L).get();
//        Team team10 = teamRepository.findById(1l).get();
//        user10.getTeams().add(team10);
//        userRepository.save(user10);

    }


}



