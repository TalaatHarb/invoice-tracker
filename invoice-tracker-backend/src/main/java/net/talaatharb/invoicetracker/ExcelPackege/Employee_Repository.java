package net.talaatharb.invoicetracker.ExcelPackege;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Employee_Repository extends JpaRepository<Employee,Long> {
}
