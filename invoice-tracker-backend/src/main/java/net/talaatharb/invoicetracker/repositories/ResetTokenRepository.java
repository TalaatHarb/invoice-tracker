package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.ResetTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResetTokenRepository extends JpaRepository<ResetTokenEntity, Long> {
    public Optional<ResetTokenEntity> findByResetToken(String resetToken);
    public Optional<ResetTokenEntity> findByUserId(Long id);
}
