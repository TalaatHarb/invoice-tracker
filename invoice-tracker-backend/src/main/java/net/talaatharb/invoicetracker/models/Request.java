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
        this.comments = comments;
        this.status = status;
        this.attachmentName = attachmentName;
        this.attachmentUrl = attachmentUrl;
        this.numberOfDays = numberOfDays;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date startDate;
    private Date requestDate;
    private Date endDate;
    private Long requestedBy;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="reviewed_by_id", referencedColumnName = "id")
    private User reviewedBy;

    private String type;
    private boolean isFullDay;
    private String comments;
    private String status="pending";

    private String attachmentName;

    private String attachmentUrl;

    private int numberOfDays;

    public Request(Date startDate, Date endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
