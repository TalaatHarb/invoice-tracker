package net.talaatharb.invoicetracker.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByUsername(String username);

    public Boolean existsByUsername(String username);

    public Optional<User> findByEmail(String email);

    public Boolean existsByEmail(String email);
}
