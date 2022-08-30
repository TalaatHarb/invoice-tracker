package net.talaatharb.invoicetracker.services;

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

    private final RequestTypeRepository requestTypeRepository;

//    public Long postRequest(Request request) {
//        Long ID = request.getRequestedBy();
//
//        User user = userRepository.findById(ID).get();
//        user.getRequests().add(request);
//        RequestType requestType = requestTypeRepository.findByTypeName(request.getType());
//        request.setType(request.getType());
//        requestType.getRequests().add(request);
////        requestTypeRepository.save(requestType);
//        userRepository.save(user);
//        List<Request> requestList = new ArrayList<Request>();
//        requestList = user.getRequests();
//
////        Request savedReq = user.getRequests().get(user.getRequests().size()-1);
////        Long reqId = savedReq.getId();
//        Long reqId = absenceRepository.count();
//        System.out.println(requestList);
//        return reqId;
//    }

//    public Long postRequest(Request request) {
//        Request req = requestRepository.save(request);
//        User user = userRepository.findById(request.getRequestedBy()).get();
//        if(requestTypeRepository.findByTypeName(request.getType()) == null){
//            RequestType requestType1 = new RequestType(request.getType());
//            requestTypeRepository.save(requestType1);
//        }
//        RequestType requestType = requestTypeRepository.findByTypeName(request.getType());
//
//        req.assignUserToRequest(user);
//        req.assignRequestTypeToRequest(requestType);
//
//        Long reqId = requestRepository.save(req).getId();
//        return reqId;
//    }

    public Long postRequest(Request request) {
        User user = userRepository.findById(request.getRequestedBy()).get();
        user.getRequests().add(request);
        userRepository.save(user);

        if(requestTypeRepository.findByTypeName(request.getType()) == null){
            RequestType requestType = new RequestType(request.getType());
            requestTypeRepository.save(requestType);
        }
        RequestType requestType = requestTypeRepository.findByTypeName(request.getType());
        requestType.getRequests().add(request);
        requestTypeRepository.save(requestType);
//        userRepository.save(user);
        return requestRepository.count();
    }

    public List<Request> getAllAbsenceByEmployeeId(Long empId){
        return requestRepository.findAllByRequestedBy(empId);
    }
}
