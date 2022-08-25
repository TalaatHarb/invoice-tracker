package net.talaatharb.invoicetracker.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class ResetBody {

    private String password;
    private String resetToken;
}
