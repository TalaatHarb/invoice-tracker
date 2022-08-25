package net.talaatharb.invoicetracker.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResetTokenEntity {
    @Id
    @Column(name="user_id")
    private Long id;

    @Column
    private String resetToken;

    @OneToOne
    @MapsId
    @JoinColumn(name="user_id")
    private User user;

    @Column
    private Long expTimeStamp;
}
