package net.talaatharb.invoicetracker.controllers;

import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.dtos.ManagerRequest;
import net.talaatharb.invoicetracker.services.RequestService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*" , allowedHeaders = "*", maxAge = 3600)
public class RequestController {

    private final RequestService requestService;

    @GetMapping("/requests")
    public ResponseEntity<List<ManagerRequest>> getUsers() {

        return ResponseEntity.ok().body(requestService.getRequests());
    }

    @PostMapping("/editRequest")

    public void editRequest(@RequestParam boolean isAccepted, Long reqID,Long managerID) {

        requestService.editRequest(isAccepted,reqID,managerID);


    }
}
