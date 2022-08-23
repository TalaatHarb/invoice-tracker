package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import net.talaatharb.invoicetracker.dtos.managerRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.RequestRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository;


@Service
@AllArgsConstructor
@Transactional
public class RequestService {

    @Autowired
    private final UserRepository userRepository;


    @Autowired
    private final RequestRepository requestRepository;


    public List<managerRequest> getRequests() {
       List <Request> requests= requestRepository.findAll();
        List<managerRequest> result  =new ArrayList<>();
       for(int i=0;i<requests.size();i++){
           Request request=requests.get(i);
           if(request.getStatus().equals("Pending")) {
               Long ID = request.getRequestedBy();
               User user = userRepository.findById(ID).get();
               result.add(new managerRequest(user.getUsername(), request));
           }


       }
       return (result);
    }

    public void editRequest(boolean isAccepted, Long reqID) {
      Request request=  requestRepository.findById(reqID).get();

      if(isAccepted)
          request.setStatus("Accepted");
      else{
          request.setStatus("Rejected");
      }
      requestRepository.save(request);



    }
}
