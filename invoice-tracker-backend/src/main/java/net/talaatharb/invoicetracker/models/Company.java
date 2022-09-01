package net.talaatharb.invoicetracker.models;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Email;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Email
    private String email;

    private String address;

    @OneToMany(mappedBy = "company")

    private List<Team> teams;

    public Company(String name, String email, String address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }
}
