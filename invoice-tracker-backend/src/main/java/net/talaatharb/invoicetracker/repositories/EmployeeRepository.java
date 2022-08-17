package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
