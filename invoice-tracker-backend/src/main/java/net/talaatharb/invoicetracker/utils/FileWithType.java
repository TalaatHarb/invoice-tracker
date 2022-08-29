package net.talaatharb.invoicetracker.utils;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.core.io.Resource;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileWithType {
    private String type;
    private Resource resource;
}
