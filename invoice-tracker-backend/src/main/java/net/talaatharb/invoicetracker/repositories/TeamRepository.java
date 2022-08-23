package net.talaatharb.invoicetracker.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.Team;

public interface TeamRepository extends JpaRepository<Team,Long> {

    Optional<Team> findByName(String team_name);

}
