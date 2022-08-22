package net.talaatharb.invoicetracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.talaatharb.invoicetracker.exceptions.ExcelResponseMessage;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.services.ExcelService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/excel")
public class ExcelController {


 private final ExcelService fileService;
    @Autowired
    public ExcelController(ExcelService fileService) {
        this.fileService = fileService;
    }

    @PostMapping(path = "/upload")
    public ResponseEntity<ExcelResponseMessage> uploadFile(@RequestBody List<User> Employees_list) {

        String message = "";



            try {
                fileService.save(Employees_list);
                message = "Uploaded the file successfully ";
                return ResponseEntity.status(HttpStatus.OK).body(new ExcelResponseMessage(message));
            } catch (Exception e) {
                message = "Could not upload the file: !";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ExcelResponseMessage(message));
            }


    }





}
