package net.talaatharb.invoicetracker.exceptions;

public class ExcelResponseMessage {
    private String message;
    public ExcelResponseMessage(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}