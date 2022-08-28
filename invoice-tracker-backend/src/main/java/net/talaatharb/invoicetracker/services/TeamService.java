package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.dtos.TeamDetails;
import net.talaatharb.invoicetracker.models.Team;
import net.talaatharb.invoicetracker.repositories.TeamRepository;

@Service
@AllArgsConstructor
@Transactional
public class TeamService {

    @Autowired

    private final TeamRepository  teamRepository;




    public void SaveTeam(Team team) {
        try {


            teamRepository.save(team);


        } catch (Exception e) {
            throw new RuntimeException("fail to save New Team : " + e.getMessage());
        }
    }

    public  void get_team(Team team) {
        try {


            teamRepository.save(team);


        } catch (Exception e) {
            throw new RuntimeException("fail to save New Team : " + e.getMessage());
        }
    }

    public List<TeamDetails> get_all_teams() {
        try {

          List<TeamDetails> teamDetails = convert_teams_to_teamsDetails(teamRepository.findAll());
          return   teamDetails;


        } catch (Exception e) {
            throw new RuntimeException("fail to save New Team : " + e.getMessage());
        }
    }

    public  List<TeamDetails> convert_teams_to_teamsDetails(List<Team> teams)
    {
        List<TeamDetails> teamDetailsList = new ArrayList<>();

        if(teams.size()>0)
        {
            for(int i =0 ;i<teams.size();i++)
            {

                TeamDetails teamDetails1 = new TeamDetails();
                teamDetails1.setId(teams.get(i).getId());
                teamDetails1.setName(teams.get(i).getName());
                teamDetailsList.add(teamDetails1);
            }
        }
        return  teamDetailsList;
    }


}
