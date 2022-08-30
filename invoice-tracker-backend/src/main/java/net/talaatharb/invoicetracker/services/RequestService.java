package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.dtos.ManagerRequest;
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


    public List<ManagerRequest> getRequests() {
       List <Request> requests= requestRepository.findAll();
        List<ManagerRequest> result  =new ArrayList<>();
       for(int i=0;i<requests.size();i++){
           Request request=requests.get(i);
           if(request.getStatus().equals("Pending")) {
               Long ID = request.getRequestedBy();
               User user = userRepository.findById(ID).get();
               result.add(new ManagerRequest(user.getUsername(), request));
           }


       }
       return (result);
    }
public void editRequest(boolean isAccepted, Long reqID,Long managerID) {
      Request request=requestRepository.findById(reqID).get();

      if(isAccepted) {

          int numberOfdays = request.getNumberOfDays();
          User user = userRepository.findById(request.getRequestedBy()).get();
          if (request.getType().equals("Annual leave")) {
              int remaining = user.getAllowedBalance() - numberOfdays;
              if (remaining < 0)
                  remaining = 0;

              user.setRemainingBalance(remaining);
          }

          request.setStatus("Accepted");
          user.setRequestsTypes(request.getType(),request.getNumberOfDays());
          userRepository.save(user);
      }else{
          request.setStatus("Rejected");
      }
      request.setReviewedBy(managerID);
      requestRepository.save(request);




    }
}
