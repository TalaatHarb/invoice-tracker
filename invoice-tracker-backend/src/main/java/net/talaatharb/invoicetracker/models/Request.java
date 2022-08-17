package net.talaatharb.invoicetracker.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String startDate;
    private String endDate;

    private Long Requested_by;

    private String type;
    private boolean Is_full_day;
    private boolean Comments;
    private boolean accepted;


    // add attachmnets & approved by

    public Request( String startDate, String endDate, boolean is_full_day, boolean comments, boolean accepted) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.accepted=accepted;
        this.Is_full_day = is_full_day;
        this.Comments = comments;
    }
}