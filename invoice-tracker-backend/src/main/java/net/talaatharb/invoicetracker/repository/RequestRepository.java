package net.talaatharb.invoicetracker.repository;

import net.talaatharb.invoicetracker.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Integer> {
}