package net.talaatharb.invoicetracker.dtos;

import net.talaatharb.invoicetracker.models.Request;

public record managerRequest(String requestedBy, Request request) {
}
