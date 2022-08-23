package net.talaatharb.invoicetracker.dtos;

import lombok.Data;
import net.talaatharb.invoicetracker.models.Request;

<<<<<<< HEAD
public class managerRequest(String requestedBy, Request request) {
=======
@Data
public class managerRequest {
    
    private String requestedBy;
   
     private Request request;

    public managerRequest(String requestedBy, Request request) {
        this.requestedBy=requestedBy;
        this.request=request;
    }
>>>>>>> ba2d81c1936678cb23cb63a75617fe0deb5890eb
}
