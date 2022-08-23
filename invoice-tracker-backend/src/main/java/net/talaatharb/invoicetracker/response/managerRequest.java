package net.talaatharb.invoicetracker.response;

import net.talaatharb.invoicetracker.models.Request;

public record managerRequest(String requestedBy, Request request) {
}
