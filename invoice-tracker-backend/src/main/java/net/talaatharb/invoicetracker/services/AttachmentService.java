package net.talaatharb.invoicetracker.services;

import net.talaatharb.invoicetracker.exceptions.UserException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class AttachmentService {
    @Value("${ATTACHMENTS_LOCATION}")
    private String attachmentLocation;
    private boolean isValidFile(String type){
        System.out.println(type);
        return (type.equals("image/png") || type.equals("image/jpeg") || type.equals("application/pdf") || type.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document"));
    }
    public void storeAttachments(MultipartFile[] attachments){
        try{
            for(MultipartFile file : attachments){
                if(!isValidFile(file.getContentType())){
                    return;
                }
                System.out.println("file name is " + file.getOriginalFilename());
                Files.write(Paths.get(Paths.get("").toAbsolutePath() + "\\"+ attachmentLocation + "\\" + file.getOriginalFilename()), file.getBytes());

                // to-do: change the password route with the attachment api route
                String attachmentUrl = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/attachments/").path(file.getOriginalFilename()).toUriString();

                // to-do : store the url in the database
                System.out.println("attachment url is " + attachmentUrl);
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    public Resource downloadAttachment(String name){
        Path path = Paths.get(attachmentLocation).toAbsolutePath().resolve(name);

        Resource resource;
        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            throw new UserException("try again");
        }

        if(resource.exists() && resource.isReadable()){
            return resource;
        }else{
            throw new UserException("try again");
        }
    }
}
