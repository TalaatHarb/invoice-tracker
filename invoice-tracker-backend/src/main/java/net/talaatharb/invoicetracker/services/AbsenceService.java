package net.talaatharb.invoicetracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.repositories.RequestRepository;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class AbsenceService {
    @Autowired
    RequestRepository absenceRepository;

    public List<Request> getAllAbsenceByEmployeeId(Long empId) {
        return absenceRepository.findAllByRequestedBy(empId);
    }

    public List<Request> postRequest(Request request){
        absenceRepository.save(request);
        return absenceRepository.findAll();
    }
}
