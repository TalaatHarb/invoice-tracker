package net.talaatharb.invoicetracker.repository;

import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByUsername(String username);

    public Boolean existsByUsername(String username);

    public Optional<User> findByEmail(String email);

    public Boolean existsByEmail(String email);
}
