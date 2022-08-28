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
    private final RequestRepository requestRepository;

    private final UserRepository userRepository;


    private final RequestRepository absenceRepository;

    private final RequestTypeRepository requestTypeRepository;

    public Integer postRequest(Request request) {
        Long ID = request.getRequestedBy();

        User user = userRepository.findById(ID).get();
        user.getRequests().add(request);
        RequestType requestType = requestTypeRepository.findByTypeName(request.getType());
//        request.setType(request.getType());
        requestType.getRequests().add(request);
//        requestTypeRepository.save(requestType);
        userRepository.save(user);
        List<Request> requestList = new ArrayList<Request>();
        requestList = user.getRequests();

//        Request savedReq = user.getRequests().get(user.getRequests().size()-1);
//        Long reqId = savedReq.getId();
        int reqId = user.getRequests().size();
        System.out.println(requestList);
        return reqId;
    }

        public List<Request> getAllAbsenceByEmployeeId(Long empId){
            return absenceRepository.findAllByRequestedBy(empId);
        }
}
