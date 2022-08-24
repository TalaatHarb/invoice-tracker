package net.talaatharb.invoicetracker.controllers;

import net.talaatharb.invoicetracker.services.AttachmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;

@RestController
@RequestMapping("/api/attachments")
@CrossOrigin(origins = "*")
public class AttachmentController {
    @Autowired
    private ServletContext context;

    @Autowired
    private AttachmentService attachmentService;

    @PostMapping("/upload")
    public ResponseEntity<Object> uploadAttachments(@RequestParam("attachments") MultipartFile[] files){
        if(files.length < 1){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        attachmentService.storeAttachments(files);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{atchName}")
    public ResponseEntity<Resource> downloadAttachment(@PathVariable String atchName){
        Resource attachmentResource = attachmentService.downloadAttachment(atchName);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + attachmentResource.getFilename())
                .body(attachmentResource);
    }
}
