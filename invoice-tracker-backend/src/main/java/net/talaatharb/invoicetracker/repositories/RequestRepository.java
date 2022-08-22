package net.talaatharb.invoicetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.Request;

public interface RequestRepository extends JpaRepository<Request, Long> {
}
