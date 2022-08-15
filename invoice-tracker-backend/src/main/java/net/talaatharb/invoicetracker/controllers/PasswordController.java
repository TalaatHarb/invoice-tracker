package net.talaatharb.invoicetracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class PasswordController {


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


    @RestController
    @RequestMapping("/password")
    public class PasswordController {

        @Autowired
        private UserService userService;

        @PostMapping(path="/forgot")
        public ResponseEntity<MessageResponse> forgotPassword(@RequestBody ForgotBody fBody, HttpServletRequest request) {
            userService.sendResetLink(fBody.getEmail(), request.getRemoteHost());
            return new ResponseEntity<>(new MessageResponse("message", "We sent you an email"),HttpStatus.OK);
        }

        @PostMapping(path="/reset")
        public ResponseEntity<MessageResponse> updatePassword(@RequestBody ResetBody resetBody){
            userService.resetPassword(resetBody.getResetToken(), resetBody.getPassword());
            return new ResponseEntity<>(new MessageResponse("message", "Password changed successfully"),HttpStatus.OK);
        }
    }

}
