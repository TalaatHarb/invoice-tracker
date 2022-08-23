package net.talaatharb.invoicetracker.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.talaatharb.invoicetracker.models.ResetTokenEntity;

@Repository
public interface ResetTokenRepository extends JpaRepository<ResetTokenEntity, Long> {
    public Optional<ResetTokenEntity> findByResetToken(String resetToken);
    public Optional<ResetTokenEntity> findByUserId(Long id);
}
