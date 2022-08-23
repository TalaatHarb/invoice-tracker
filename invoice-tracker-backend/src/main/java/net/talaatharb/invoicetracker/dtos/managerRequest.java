package net.talaatharb.invoicetracker.dtos;

import lombok.Data;
import net.talaatharb.invoicetracker.models.Request;

@Data
public class managerRequest {
    
    private String requestedBy;
   
     private Request request;

    public managerRequest(String requestedBy, Request request) {
        this.requestedBy=requestedBy;
        this.request=request;
    }
}
