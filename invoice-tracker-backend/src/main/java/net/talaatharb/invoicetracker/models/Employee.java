package net.talaatharb.invoicetracker.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "Employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String empName;
    private String empArabicName;
    private String jobTitle;
    private String teamName;
    private int balance;
    private int remainBalance;
    private String joinDate;
    private String endDate;

}
