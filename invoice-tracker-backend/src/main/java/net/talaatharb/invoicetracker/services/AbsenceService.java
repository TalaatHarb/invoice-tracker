package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.models.RequestType;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.RequestRepository;
import net.talaatharb.invoicetracker.repositories.RequestTypeRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository;

@Service
@RequiredArgsConstructor
public class AbsenceService {

    private final UserRepository userRepository;


    private final RequestRepository absenceRepository;

    private final RequestTypeRepository requestTypeRepository;

    public Long postRequest(Request request) {
        if(requestTypeRepository.findByTypeName(request.getType()) == null){
            RequestType requestType = new RequestType(request.getType());
            requestTypeRepository.save(requestType);
        }

        RequestType requestType = requestTypeRepository.findByTypeName(request.getType());

        request.setRequestType(requestType);

        User user = userRepository.findById(request.getRequestedBy()).get();
        request.setUser(user);
        user.getRequests().add(request);
        userRepository.save(user);
        return absenceRepository.count();
    }

    public List<Request> getAllAbsenceByEmployeeId(Long empId){
        return absenceRepository.findAllByRequestedBy(empId);
    }

    public List<Request> updateAllEmployeeAbsences(List<Request> absences) {
        if(absences.size() == 0) return absences;
        User user = userRepository.findById(absences.get(0).getRequestedBy()).get();
        user.setRequests(absences);
        userRepository.saveAndFlush(user);
        return absences;
    }

    public void deleteEmployeeAbsences(Long empId) {
        User user = userRepository.findById(empId).get();
        user.setRequests(new ArrayList<>());
        userRepository.save(user);
    }
}
