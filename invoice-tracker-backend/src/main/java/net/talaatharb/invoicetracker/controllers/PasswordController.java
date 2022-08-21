package net.talaatharb.invoicetracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.talaatharb.invoicetracker.dtos.ForgotBody;
import net.talaatharb.invoicetracker.dtos.MessageResponse;
import net.talaatharb.invoicetracker.dtos.ResetBody;
import net.talaatharb.invoicetracker.services.PasswordService;

@RestController
@RequestMapping("/password")
public class PasswordController {

    @Autowired
    private PasswordService passwordService;

    @PostMapping(path="/forgot")
    public ResponseEntity<MessageResponse> forgotPassword(@RequestBody ForgotBody fBody) {
        passwordService.sendResetLink(fBody.getEmail());
        return new ResponseEntity<>(new MessageResponse("We sent you an email", "message"), HttpStatus.OK);
    }

    @PostMapping(path="/reset")
    public ResponseEntity<MessageResponse> updatePassword(@RequestBody ResetBody resetBody){
        passwordService.resetPassword(resetBody.getResetToken(), resetBody.getPassword());
        return new ResponseEntity<>(new MessageResponse("Password changed successfully", "message"),HttpStatus.OK);
    }
}
