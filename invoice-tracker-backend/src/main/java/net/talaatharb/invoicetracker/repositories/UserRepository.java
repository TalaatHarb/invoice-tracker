package net.talaatharb.invoicetracker.repositories;

import java.util.Optional;

import net.talaatharb.invoicetracker.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    public Optional<UserEntity> findByEmail(String email);

    public Optional<UserEntity> findByResetToken(String resetToken);

}
