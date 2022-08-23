package net.talaatharb.invoicetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.Request;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

    List<Request> findAllByRequestedBy(Long empId);
}
