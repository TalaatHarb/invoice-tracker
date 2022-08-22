package net.talaatharb.invoicetracker.models;

import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "email") })
public class User {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String nationalId;

	@NotBlank
	private String englishName;

	@NotBlank
	private String arabicName;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(min = 8, max = 120)
	private String password;

	@NotBlank
	private String englishAddress;

	@NotBlank
	private String arabicAddress;

	@NotBlank
	private int allowedBalance;

	@NotBlank
	private int remainingBalance;

	@NotBlank
	private boolean billable;

	@NotBlank
	private boolean isDisabled;

	private boolean isResigned;

	@NotBlank
	private Date joiningDate;

	private Date endDate;

	@NotBlank
	private Date birthDate;

	private String imgUrl;

	private String mobileNumber;

	@NotBlank
	private boolean isFullTime;

	private Date insuranceDate;

	private int yearsOfInsurance;

	private int overtime;

	private double payRate;

	private Boolean isEnabled;

	private Date lastTimePasswordChanged;

	@ManyToMany
	private List<Team> teams = new ArrayList<>();

	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(
			mappedBy = "reviewedBy",
			cascade= CascadeType.ALL,
			orphanRemoval = true
	)
	private List<Request> requests = new ArrayList<>();

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	@NotBlank
	@Size(max = 20)
	private String username;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private ResetTokenEntity resetToken;

	public User(String username, String email, String encode) {
		this.username = username;
		this.email = email;
		this.password = encode;
	}

	public User(String nationalId, String englishName, String arabicName,
				String email, String password) {
		this.nationalId = nationalId;
		this.englishName = englishName;
		this.arabicName = arabicName;
		this.email = email;
		this.password = password;
		this.englishAddress = englishAddress;
		this.arabicAddress = arabicAddress;
		this.allowedBalance = allowedBalance;
		this.remainingBalance = remainingBalance;
		this.billable = billable;
		this.isDisabled = isDisabled;
		this.isResigned = isResigned;
		this.joiningDate = joiningDate;
		this.endDate = endDate;
		this.birthDate = birthDate;
		this.imgUrl = imgUrl;
		this.mobileNumber = mobileNumber;
		this.isFullTime = isFullTime;
		this.insuranceDate = insuranceDate;
		this.yearsOfInsurance = yearsOfInsurance;
		this.overtime = overtime;
		this.payRate = payRate;
		this.isEnabled = isEnabled;
		this.lastTimePasswordChanged = lastTimePasswordChanged;
		this.username = username;
	}
}
