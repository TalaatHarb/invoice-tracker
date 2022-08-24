package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.AbsenceAttachments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttachmentRepository extends JpaRepository<AbsenceAttachments, Long> {
}
