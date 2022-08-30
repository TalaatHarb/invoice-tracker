package net.talaatharb.invoicetracker.controllers;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import net.talaatharb.invoicetracker.services.AttachmentService;
import net.talaatharb.invoicetracker.utils.FileWithType;

@RestController
@RequestMapping("/api/attachments")
@CrossOrigin(origins = "*")
public class AttachmentController {
    @Autowired
    private ServletContext context;

    @Autowired
    private AttachmentService attachmentService;

    @PostMapping("/upload")
    public ResponseEntity<Object> uploadAttachments(@RequestParam("attachments") MultipartFile[] files, @RequestParam("reqId") Long reqId){
        if(files.length < 1){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        attachmentService.storeAttachments(files, reqId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{atchName}")
    public ResponseEntity<Resource> downloadAttachment(@PathVariable String atchName){
        FileWithType fileWithType = attachmentService.downloadAttachment(atchName);
        Resource attachmentResource = fileWithType.getResource();
        String type = fileWithType.getType();
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(type))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + attachmentResource.getFilename())
                .body(attachmentResource);
    }
}
