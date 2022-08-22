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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date startDate;
    private Date requestDate;
    private Date endDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="requested_by_id", referencedColumnName = "id")
    private User requestedBy;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="reviewed_by_id", referencedColumnName = "id")
    private User reviewedBy;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="request_type_id", referencedColumnName = "id")
    private RequestType type;
    private boolean isFullDay;
    private String comments;
    private String status;

    private String attachmentName;

    private String attachmentUrl;

    private int numberOfDays;
}
