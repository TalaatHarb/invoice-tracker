package net.talaatharb.invoicetracker.dtos;

import java.util.ArrayList;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
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
}
