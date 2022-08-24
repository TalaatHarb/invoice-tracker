package net.talaatharb.invoicetracker.dtos;

import java.util.ArrayList;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDetails {

    private long id;

    private long employeeId;

    private String nationalId;

    private String englishName;

    private String arabicName;

    private String email;

    private String mobileNumber;

    private String englishAddress;

    private String arabicAddress;

    private String jobTitle;

    private Date joiningDate;

    private Date endDate;

    private int allowedBalance;

    private int remainingBalance;

    private ArrayList<TeamDetails> team;

    private boolean billable;

    private boolean disabled;

    private boolean fullTime;

    private boolean resigned;

    @Override
    public String toString() {
        return "UserDetails{" +
                "id=" + id +
                ", employeeId=" + employeeId +
                ", nationalId='" + nationalId + '\'' +
                ", englishName='" + englishName + '\'' +
                ", arabicName='" + arabicName + '\'' +
                ", email='" + email + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", englishAddress='" + englishAddress + '\'' +
                ", arabicAddress='" + arabicAddress + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", joiningDate=" + joiningDate +
                ", endDate=" + endDate +
                ", allowedBalance=" + allowedBalance +
                ", remainingBalance=" + remainingBalance +
                ", team=" + team +
                ", billable=" + billable +
                ", disabled=" + disabled +
                ", fullTime=" + fullTime +
                ", resigned=" + resigned +
                '}';
    }
}
