package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbsenceService {
    @Autowired
    RequestRepository absenceRepository;

    public List<Request> getAllAbsenceByEmployeeId(Long empId) {
        return absenceRepository.findAllByRequestedBy(empId);
    }
}
