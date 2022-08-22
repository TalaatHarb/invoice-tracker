package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
	Boolean existsByEmail(String email);

	Boolean existsByUsername(String username);

	Optional<User> findByEmail(String email);

	Optional<User> findByUsername(String username);

	public Optional<User> findByResetToken(String resetToken);

}
