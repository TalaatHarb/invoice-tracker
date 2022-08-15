package net.talaatharb.invoicetracker.exceptions;


import jdk.jshell.spi.ExecutionControl;
import net.talaatharb.invoicetracker.dtos.MessageResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler{
    @ExceptionHandler(value = {ExecutionControl.UserException.class})
    public ResponseEntity<Object> handleException(ExecutionControl.UserException e, WebRequest request){
        String message = e.getLocalizedMessage();
        return new ResponseEntity<>(new MessageResponse("error", message), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}