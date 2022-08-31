package net.talaatharb.invoicetracker.dtos;

import java.util.List;

import lombok.Getter;
import net.talaatharb.invoicetracker.models.Request;

@Getter
public class AbsencesListDto {
    List<Request> absences;
}
