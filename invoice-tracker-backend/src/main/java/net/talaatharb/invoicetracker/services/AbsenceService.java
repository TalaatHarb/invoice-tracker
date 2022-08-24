package net.talaatharb.invoicetracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
    private final RequestRepository requestRepository;

    private final UserRepository userRepository;


    private final RequestRepository absenceRepository;

    private final RequestTypeRepository requestTypeRepository;

    public List<Request> postRequest(Request request) {
        Long ID = request.getRequestedBy();
        User user = userRepository.findById(ID).get();
        user.getRequests().add(request);
        RequestType Rtype = requestTypeRepository.findByTypeName(request.getType());
        request.setType(request.getType());
        Rtype.getRequests().add(request);
        userRepository.save(user);
        return requestRepository.findAll();
    }

        public List<Request> getAllAbsenceByEmployeeId(Long empId){
            return absenceRepository.findAllByRequestedBy(empId);
        }

    }
