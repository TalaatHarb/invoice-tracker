package net.talaatharb.invoicetracker.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class RequestType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String typeName;

    @OneToMany(
            cascade= CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    private List<Request> requests= new ArrayList<>();

}
