package net.talaatharb.invoicetracker.exceptions;

import net.talaatharb.invoicetracker.dtos.MessageResponse;
import org.hibernate.HibernateException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler{
    @ExceptionHandler(value = {UserException.class})
    public ResponseEntity<MessageResponse> handleUserException(UserException e, WebRequest request){
        String message = e.getLocalizedMessage();
        return new ResponseEntity<>(new MessageResponse("error", message), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<MessageResponse> handleDatabaseException(HibernateException e, WebRequest request){
        return new ResponseEntity<>(new MessageResponse("error", "Unexpected error occured"), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
