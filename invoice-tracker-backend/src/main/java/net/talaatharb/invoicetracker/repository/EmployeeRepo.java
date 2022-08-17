package net.talaatharb.invoicetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.User;

public interface EmployeeRepo extends JpaRepository<User, Integer>{

}
