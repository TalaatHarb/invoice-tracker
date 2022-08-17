package net.talaatharb.invoicetracker.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.ERole;
import net.talaatharb.invoicetracker.models.Role;

public interface RoleRepositry extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
