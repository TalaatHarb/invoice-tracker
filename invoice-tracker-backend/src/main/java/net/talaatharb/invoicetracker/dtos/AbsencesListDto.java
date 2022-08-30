package net.talaatharb.invoicetracker.dtos;

import lombok.Getter;
import net.talaatharb.invoicetracker.models.Request;

import java.util.List;

@Getter
public class AbsencesListDto {
    List<Request> absences;
}
