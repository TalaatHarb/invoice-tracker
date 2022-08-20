package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository1 extends JpaRepository<UserEntity, Long> {

    public Optional<UserEntity> findByEmail(String email);

    public Optional<UserEntity> findByResetToken(String resetToken);

}
