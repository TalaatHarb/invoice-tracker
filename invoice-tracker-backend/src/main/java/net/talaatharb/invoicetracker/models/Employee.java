package net.talaatharb.invoicetracker.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Employee")
public class Employee {


    @Id
    @Column(name = "employee_id",nullable = false,unique = true)
    private long employee_id;
    @Column(name = "english_name")
    private String english_name;

    @Column(name = "arabic_name")
    private String arabic_name;

    @Column(name = "password" ,unique = true,nullable = false)
    private String password;

    @Column(name = "birth_date")
    private Date birth_date;

    @Column(name = "national_id",unique = true)
    private String national_id;

    @Column(name = "employee_adress_english")
    private String employee_adress_english;

    @Column(name = "employee_adress_arabic")
    private String employee_adress_arabic;


    @Column(name = "jop_title")
    private String jop_title;


    @Column(name = "joining_date")
    private Date joining_date;

    @Column(name = "team_name")
    private String team_name;

    @Column(name = "email" ,unique = true, nullable = false)
    private String email;

    @Column(name = "mobile_number")
    private String mobile_number;

    @Column(name = "is_fullTime")
    private boolean is_fullTime;

    @Column(name = "billable")
    private boolean billable;

    @Column(name = "multible_team")
    private boolean multible_team;

    @Column(name = "annual_balance")
    private float annual_balance;



    @Column(name = "is_disabiled")
    private boolean is_disabiled;




    public Employee() {
    }



    public long getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(long employee_id) {
        this.employee_id = employee_id;
    }

    public String getEnglish_name() {
        return english_name;
    }

    public void setEnglish_name(String english_name) {
        this.english_name = english_name;
    }

    public String getArabic_name() {
        return arabic_name;
    }

    public void setArabic_name(String arabic_name) {
        this.arabic_name = arabic_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public String getNational_id() {
        return national_id;
    }

    public void setNational_id(String national_id) {
        this.national_id = national_id;
    }

    public String getEmployee_adress_english() {
        return employee_adress_english;
    }

    public void setEmployee_adress_english(String employee_adress_english) {
        this.employee_adress_english = employee_adress_english;
    }

    public String getEmployee_adress_arabic() {
        return employee_adress_arabic;
    }

    public void setEmployee_adress_arabic(String employee_adress_arabic) {
        this.employee_adress_arabic = employee_adress_arabic;
    }

    public String getJop_title() {
        return jop_title;
    }

    public void setJop_title(String jop_title) {
        this.jop_title = jop_title;
    }

    public Date getJoining_date() {
        return joining_date;
    }

    public void setJoining_date(Date joining_date) {
        this.joining_date = joining_date;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile_number() {
        return mobile_number;
    }

    public void setMobile_number(String mobile_number) {
        this.mobile_number = mobile_number;
    }

    public boolean isIs_fullTime() {
        return is_fullTime;
    }

    public void setIs_fullTime(boolean is_fullTime) {
        this.is_fullTime = is_fullTime;
    }

    public boolean isBillable() {
        return billable;
    }

    public void setBillable(boolean billable) {
        this.billable = billable;
    }

    public boolean isMultible_team() {
        return multible_team;
    }

    public void setMultible_team(boolean multible_team) {
        this.multible_team = multible_team;
    }

    public float getAnnual_balance() {
        return annual_balance;
    }

    public void setAnnual_balance(float annual_balance) {
        this.annual_balance = annual_balance;
    }

    public boolean isIs_disabiled() {
        return is_disabiled;
    }

    public void setIs_disabiled(boolean is_disabiled) {
        this.is_disabiled = is_disabiled;
    }
}
