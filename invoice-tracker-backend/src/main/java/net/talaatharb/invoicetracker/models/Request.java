package net.talaatharb.invoicetracker.models;

import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
@Entity
public class Request {
    public Request(Date startDate, Date requestDate, Date endDate, Long requestedBy, String type, boolean isFullDay, String comments, String status, String attachmentName, String attachmentUrl, int numberOfDays) {
        this.startDate = startDate;
        this.requestDate = requestDate;
        this.endDate = endDate;
        this.requestedBy = requestedBy;
        this.type = type;
        this.isFullDay = isFullDay;
        this.comment = comments;
        this.status = status;
        this.attachmentName = attachmentName;
        this.attachmentUrl = attachmentUrl;
        this.numberOfDays = numberOfDays;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @NotBlank
    private Date startDate;

//    @NotBlank
    private Date requestDate;

//    @NotBlank
    private Date endDate;

    //    @NotBlank
    private Long requestedBy;



    private Long reviewedBy;


    private String type;

//    @NotBlank
    private boolean isFullDay;

//        @NotBlank

    private String status="Pending";

    private String comment;

//    @NotBlank


    private String attachmentName;

    private String attachmentUrl;

//    @NotBlank
    private int numberOfDays;


    public Request(Date startDate, Date endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Request(Date startDate, Date endDate, Long requestedBy, String type, int numberOfDays) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.requestedBy = requestedBy;
        this.type = type;
        this.numberOfDays = numberOfDays;
    }
}
