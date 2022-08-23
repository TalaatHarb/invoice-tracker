package net.talaatharb.invoicetracker.controllers;


import lombok.RequiredArgsConstructor;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AbsenceController {
    @Autowired
    AbsenceService absenceService;

    @GetMapping("/request")
    public ResponseEntity<List<Request>> getAbsenceHistoryByEmployeeId(@RequestParam Long empId) {
        return ResponseEntity.ok().body(absenceService.getAllAbsenceByEmployeeId(empId));
    }
}
