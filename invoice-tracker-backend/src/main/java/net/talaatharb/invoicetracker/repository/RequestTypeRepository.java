package net.talaatharb.invoicetracker.repository;

import net.talaatharb.invoicetracker.models.RequestType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestTypeRepository extends JpaRepository<RequestType, Integer> {
    RequestType findByName(String name);
}