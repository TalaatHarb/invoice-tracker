package net.talaatharb.invoicetracker.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(
            cascade= CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    private Collection<Request> requests= new ArrayList<>();

    public RequestType(String name, Collection<Request> requests) {
        this.name = name;
        this.requests = requests;
    }
}