package net.talaatharb.invoicetracker.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.response.managerRequest;
import net.talaatharb.invoicetracker.services.RequestService;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class RequestController {

    private final RequestService requestService;

    @GetMapping("/requests")
    public ResponseEntity<List<managerRequest>> getUsers() {

        return ResponseEntity.ok().body(requestService.getRequests());
    }

    @PostMapping("/editRequest")
    public void editRequest(@RequestParam boolean isAccepted, Long reqID) {

        requestService.editRequest(isAccepted,reqID);

    }
}
