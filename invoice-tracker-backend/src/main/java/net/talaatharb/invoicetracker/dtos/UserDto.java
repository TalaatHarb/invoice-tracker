package net.talaatharb.invoicetracker.dtos;

import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //		@NotBlank
    private String nationalId;

    //		@NotBlank
    private String englishName;

    //		@NotBlank
    private String arabicName;

    //		@NotBlank
    @Size(max = 50)
//	@Email
    private String email;

    //		@NotBlank
    @Size(min = 8, max = 120)
    private String password;

    //		@NotBlank
    private String englishAddress;

    //		@NotBlank
    private String arabicAddress;

    //		@NotBlank
    private int allowedBalance;

    //	@NotBlank
    private int remainingBalance;

    //	@NotBlank
    private boolean billable;

    //	@NotBlank
    private boolean isDisabled;

    private boolean isResigned;

    //	@NotBlank
    private Date joiningDate;

    private Date endDate;

    //	@NotBlank
    private Date birthDate;

    private String imgUrl;

    private String mobileNumber;

    //	@NotBlank
    private boolean isFullTime;

    private Date insuranceDate;

    private int yearsOfInsurance;

    private int overtime;

    private double payRate;

    private Boolean isEnabled;

    private Date lastTimePasswordChanged;

    private String jopTitle;
    private Long userId;


    private List<String> teams = new ArrayList<>();





    //	@NotBlank
    @Size(max = 20)
    private String username;
}
