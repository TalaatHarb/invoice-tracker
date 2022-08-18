package net.talaatharb.invoicetracker.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Boolean existsByEmail(String email);

	Boolean existsByUsername(String username);

	Optional<User> findByEmail(String email);

	Optional<User> findByUsername(String username);
}
