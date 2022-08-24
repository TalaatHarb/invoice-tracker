package net.talaatharb.invoicetracker.dtos;

import lombok.Data;
import net.talaatharb.invoicetracker.models.Request;

@Data
public class ManagerRequest {
    
    private String requestedBy;
   
     private Request request;

    public ManagerRequest(String requestedBy, Request request) {
        this.requestedBy=requestedBy;
        this.request=request;
    }
}
