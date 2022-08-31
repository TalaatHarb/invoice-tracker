package net.talaatharb.invoicetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.AbsenceAttachments;

public interface AttachmentRepository extends JpaRepository<AbsenceAttachments, Long> {
}
