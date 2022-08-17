package net.talaatharb.invoicetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.talaatharb.invoicetracker.models.Requests;


public interface RequestsRepo extends JpaRepository<Requests, Integer>{

}
