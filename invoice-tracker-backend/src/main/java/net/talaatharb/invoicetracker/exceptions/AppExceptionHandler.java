package net.talaatharb.invoicetracker.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import net.talaatharb.invoicetracker.dtos.MessageResponse;

@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler{
    @ExceptionHandler(value = {UserException.class})
    public ResponseEntity<MessageResponse> handleUserException(UserException e, WebRequest request){
        String message = e.getLocalizedMessage();
        System.out.println("the message is " + e.getLocalizedMessage());
        return new ResponseEntity<>(new MessageResponse(message, "error"), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

//    @ExceptionHandler(value = {Exception.class})
//    public ResponseEntity<MessageResponse> handleDatabaseException(Exception e, WebRequest request){
//        return new ResponseEntity<>(new MessageResponse("Unexpected error occurred", "error"), HttpStatus.INTERNAL_SERVER_ERROR);
//    }
}
