package net.talaatharb.invoicetracker.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AbsenceAttachments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String attachmentName;

    public AbsenceAttachments(String attachmentName, String attachmentUrl) {
        this.attachmentName = attachmentName;
        this.attachmentUrl = attachmentUrl;
    }

    private String attachmentUrl;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="request_id", referencedColumnName = "id")
    private Request request;
}
