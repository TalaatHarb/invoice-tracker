package net.talaatharb.invoicetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.RequestType;

public interface RequestTypeRepository extends JpaRepository<RequestType, Integer> {
    RequestType findByTypeName(String name);
}
