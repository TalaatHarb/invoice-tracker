package net.talaatharb.invoicetracker.controllers;

import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.services.AbsenceRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("user/absence")
@CrossOrigin(origins = "*")
public class AbsenceController {
    @Autowired
    private AbsenceRequestService absenceRequestService;

    // http://localhost:8080/users/request/absenece
    @PostMapping(consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE },
            produces = {
                    MediaType.APPLICATION_JSON_VALUE,
                    MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<Request>> postRequest(@RequestBody Request request){

        return new ResponseEntity<>(absenceRequestService.postRequest(request), HttpStatus.OK);
    }

}
