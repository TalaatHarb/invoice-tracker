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

	//		@NotBlank
	private String nationalId;

	//		@NotBlank
	private String englishName;

	//		@NotBlank
	private String arabicName;
	//		@NotBlank
	private String jobTitle;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
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


	@LazyCollection(LazyCollectionOption.FALSE)
	@ManyToMany
	private List<Team> teams;


	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(

			cascade= CascadeType.ALL,
			orphanRemoval = true
	)
	private List<Request> requests = new ArrayList<>();


	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	@NotBlank
	@Size(max = 20)
	private String username;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private ResetTokenEntity resetToken;
	
	public boolean isNotPasswordExpired() {
		long PASSWORD_EXPIRATION_TIME = 30L * 24L * 60L * 60L * 1000L;
        if (this.lastTimePasswordChanged == null) return true;
         
        long currentTime = System.currentTimeMillis();
        long lastChangedTime = this.lastTimePasswordChanged.getTime();
         
        return currentTime < lastChangedTime + PASSWORD_EXPIRATION_TIME;
    }

	public User(String username, String email, String encode) {
		this.username = username;
		this.email = email;
		this.password = encode;
	}

	public User(String email, String password,String username, boolean isEnabled) {
		this.email = email;
		this.password = password;
		this.username = username;
		this.isEnabled = isEnabled;
	}

	public User(String email,String password,String username,
			Boolean isEnabled, Date lastTimePasswordChanged) {
		super();
		this.email = email;
		this.password = password;
		this.username = username;
		this.isEnabled = isEnabled;
		this.lastTimePasswordChanged = lastTimePasswordChanged;
		this.username = username;
	}
	
	


	public User(String email, String password, Date joiningDate, String mobileNumber, String username) {
		this.email = email;
		this.password = password;
		this.joiningDate = joiningDate;
		this.mobileNumber = mobileNumber;
		this.username = username;
	}

	public User(String email, String password, Date joiningDate, String mobileNumber, String username,boolean billable) {
		this.email = email;
		this.password = password;
		this.joiningDate = joiningDate;
		this.mobileNumber = mobileNumber;
		this.username = username;
		this.billable=billable;
	}


}
