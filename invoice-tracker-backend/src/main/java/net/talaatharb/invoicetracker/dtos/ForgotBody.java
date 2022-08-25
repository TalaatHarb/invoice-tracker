package net.talaatharb.invoicetracker.dtos;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class ForgotBody {
    private String email;
}

