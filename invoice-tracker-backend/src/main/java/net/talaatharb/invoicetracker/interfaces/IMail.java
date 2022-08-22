package net.talaatharb.invoicetracker.interfaces;

public interface IMail {
    public void sendMail(String to, String subject, String body);
}

