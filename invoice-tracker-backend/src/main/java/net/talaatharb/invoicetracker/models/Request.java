package net.talaatharb.invoicetracker.models;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

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
    private Date startDate;

//    @NotBlank
    private Date requestDate;

//    @NotBlank
    private Date endDate;

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
    private String status = "pending";

    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(
            cascade= CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "request"
    )
    private List<AbsenceAttachments> absenceAttachments;

//    @NotBlank
    private int numberOfDays;

    public Request(Date startDate, Date endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
