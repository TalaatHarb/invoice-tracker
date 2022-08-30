package net.talaatharb.invoicetracker.services;

import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import net.talaatharb.invoicetracker.exceptions.UserException;
import net.talaatharb.invoicetracker.models.AbsenceAttachments;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.repositories.AttachmentRepository;
import net.talaatharb.invoicetracker.repositories.RequestRepository;
import net.talaatharb.invoicetracker.utils.FileWithType;

@Service
public class AttachmentService {
    @Value("${ATTACHMENTS_LOCATION}")
    private String attachmentLocation;

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private AttachmentRepository attachmentRepository;

    private boolean isValidFile(String type){
        System.out.println(type);
        return (type.equals("image/png") || type.equals("image/jpeg") || type.equals("application/pdf") || type.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document"));
    }

    @Transactional
    public void storeAttachments(MultipartFile[] attachments, Long reqId){
        try{

            List<AbsenceAttachments> absenceAttachments = new ArrayList<>();

            Optional<Request> requestOptional = requestRepository.findById(reqId);
            if(requestOptional.isEmpty()){
                return;
            }

            Request request = requestOptional.get();

            for(MultipartFile file : attachments){
                if(!isValidFile(file.getContentType())){
                    return;
                }
                System.out.println("file name is " + file.getOriginalFilename());
                Files.write(Paths.get(Paths.get("").toAbsolutePath() + "\\"+ attachmentLocation + "\\" + file.getOriginalFilename()), file.getBytes());

                String attachmentUrl = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/attachments/").path(file.getOriginalFilename()).toUriString();

                System.out.println("attachment url is " + attachmentUrl);
                AbsenceAttachments attachment = new AbsenceAttachments(file.getOriginalFilename(),attachmentUrl);
                attachment.setRequest(request);
                absenceAttachments.add(attachment);
            }

            request.setAbsenceAttachments(attachmentRepository.saveAll(absenceAttachments));


        }catch(Exception e){
            e.printStackTrace();
        }
    }

    public FileWithType downloadAttachment(String name){
        Path path = Paths.get(attachmentLocation).toAbsolutePath().resolve(name);
        String type;

        try {
            type = Files.probeContentType(path);
        }catch(Exception e){
            throw new UserException("try again");
        }

        Resource resource;
        try {
            resource = new UrlResource(path.toUri());
        } catch (MalformedURLException e) {
            throw new UserException("try again");
        }

        if(resource.exists() && resource.isReadable()){
            return new FileWithType(type, resource);
        }else{
            throw new UserException("try again");
        }
    }
}
