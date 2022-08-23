package net.talaatharb.invoicetracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.repositories.RequestRepository;

@Service
@RequiredArgsConstructor
public class AbsenceService {
    private final RequestRepository requestRepository;
    public List<Request> postRequest(Request request){
        requestRepository.save(request);
        return requestRepository.findAll();
    }
}
