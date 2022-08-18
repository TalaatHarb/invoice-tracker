package net.talaatharb.invoicetracker.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "email") })
public class User {
	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 120)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	@NotBlank
	@Size(max = 20)
	private String username;
	
	private Boolean isEnabled;
	
	private static final long PASSWORD_EXPIRATION_TIME
    = 30L * 24L * 60L * 60L * 1000L;
	
	private Date passwordChangedTime;


	public User(String username, String email, String encode) {
		this.username = username;
		this.email = email;
		this.password = encode;
	}
	
	public boolean isNotPasswordExpired() {
        if (this.passwordChangedTime == null) return true;
         
        long currentTime = System.currentTimeMillis();
        long lastChangedTime = this.passwordChangedTime.getTime();
         
        return currentTime < lastChangedTime + PASSWORD_EXPIRATION_TIME;
    }
}
