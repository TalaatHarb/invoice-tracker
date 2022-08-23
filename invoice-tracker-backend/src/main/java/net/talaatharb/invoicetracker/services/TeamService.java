package net.talaatharb.invoicetracker.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
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


}
