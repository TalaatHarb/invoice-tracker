package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.ERole;
import net.talaatharb.invoicetracker.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface RoleRepositry extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
