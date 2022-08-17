package net.talaatharb.invoicetracker.models;

import javax.persistence.*;

@Entity
@Table
public class ResetTokenEntity {
    @Id
    @Column(name="user_id")
    private Long id;

    @Column
    private String resetToken;

    @OneToOne
    @MapsId
    @JoinColumn(name="user_id")
    private UserEntity user;
    @Column
    private Long expTimeStamp;

    public Long getExpTimeStamp() {
        return expTimeStamp;
    }

    public void setExpTimeStamp(Long expTimeStamp) {
        this.expTimeStamp = expTimeStamp;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getResetToken() {
        return resetToken;
    }

    public void setResetToken(String resetToken) {
        this.resetToken = resetToken;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
