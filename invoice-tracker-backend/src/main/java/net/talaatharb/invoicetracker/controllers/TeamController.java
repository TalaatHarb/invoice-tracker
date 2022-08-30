package net.talaatharb.invoicetracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.dtos.TeamDetails;
import net.talaatharb.invoicetracker.services.TeamService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*" , allowedHeaders = "*", maxAge = 3600)
public class TeamController {

    @Autowired
    private  final TeamService  teamService;

    @GetMapping("/teams")
    public ResponseEntity<List<TeamDetails>> getUsers() {
        return ResponseEntity.ok().body(teamService.get_all_teams());
    }


}
