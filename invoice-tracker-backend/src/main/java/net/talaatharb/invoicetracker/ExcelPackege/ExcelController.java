package net.talaatharb.invoicetracker.ExcelPackege;
import net.talaatharb.invoicetracker.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/excel")
public class ExcelController {


 private final   ExcelService fileService;
    @Autowired
    public ExcelController(ExcelService fileService) {
        this.fileService = fileService;
    }

    @PostMapping(path = "/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestBody List<Employee> Employees_list) {

        String message = "";



            try {
                fileService.save(Employees_list);
                message = "Uploaded the file successfully ";
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Could not upload the file: !";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }


    }





}
