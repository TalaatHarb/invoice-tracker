package net.talaatharb.invoicetracker.models;

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

//    @NotBlank
    private String startDate;

//    @NotBlank
    private String requestDate;

//    @NotBlank
    private String endDate;

//    @NotBlank
    private Long requestedBy;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="reviewed_by_id", referencedColumnName = "id")
    private User reviewedBy;

//    @NotBlank
    private String type;

//    @NotBlank
    private boolean isFullDay;

    private String comment;

//    @NotBlank
    private String status="pending";

    private String attachmentName;

    private String attachmentUrl;

//    @NotBlank
    private int numberOfDays;


    public Request(String startDate, String endDate) {
        this.startDate = startDate;
        this.endDate = endDate;

    }

}
