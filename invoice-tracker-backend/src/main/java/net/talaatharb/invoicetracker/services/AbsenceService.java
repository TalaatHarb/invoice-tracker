package net.talaatharb.invoicetracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.repositories.RequestRepository;

@Service
public class AbsenceService {
    @Autowired
    RequestRepository absenceRepository;

    public List<Request> getAllAbsenceByEmployeeId(Long empId) {
        return absenceRepository.findAllByRequestedBy(empId);
    }

    public Long postRequest(Request request){
        Request res = absenceRepository.save(request);
        return res.getId();
    }
}
