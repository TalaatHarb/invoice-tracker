package net.talaatharb.invoicetracker.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Data
@Entity
@NoArgsConstructor

public class RequestsTypesNumber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;
    private String name;

    private int numberOfDays;

    public RequestsTypesNumber(String name, int numberOfDays) {
        this.name = name;
        this.numberOfDays = numberOfDays;
    }
}
