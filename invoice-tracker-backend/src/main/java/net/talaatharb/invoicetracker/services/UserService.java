package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.dtos.TeamDetails;
import net.talaatharb.invoicetracker.dtos.UserDetails;
import net.talaatharb.invoicetracker.models.ERole;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.Team;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.RoleRepositry;
import net.talaatharb.invoicetracker.repositories.UserRepository;

@Service
@AllArgsConstructor
@Transactional
public class UserService {

	private final PasswordEncoder passwordEncoder;
	@Autowired
	private final RoleRepositry roleRepositry;

	@Autowired
	private final UserRepository userRepository;

	public void addRoleToUser(String email, ERole userRole) {
		Optional<User> user = userRepository.findByEmail(email);
		Optional<Role> role = roleRepositry.findByName(userRole);
		if (user.isPresent() && role.isPresent()) {
			user.get().getRoles().add(role.get());
		}
	}

	public User getUser(String username) {
		return userRepository.findByUsername(username).orElse(null);
	}

	public List<UserDetails> getUsers() {

		ArrayList<User> users = (ArrayList<User>) userRepository.findAll();
		ArrayList<UserDetails> usersDetails =  new ArrayList<>();

		for(User user: users){
			ArrayList<TeamDetails> teamsDetails = new ArrayList<>();
			UserDetails userDetails = new UserDetails();
			userDetails.setId(user.getId());
			userDetails.setNationalId(user.getNationalId());
			userDetails.setEnglishName(user.getEnglishName());
			userDetails.setArabicName(user.getArabicName());
			userDetails.setEmail(user.getEmail());
			userDetails.setMobileNumber(user.getMobileNumber());
			userDetails.setEnglishAddress(user.getEnglishAddress());
			userDetails.setArabicAddress(user.getArabicAddress());
			userDetails.setJobTitle(user.getJobTitle());
			userDetails.setJoiningDate(user.getJoiningDate());
			userDetails.setEndDate(user.getEndDate());
			userDetails.setAllowedBalance(user.getAllowedBalance());
			userDetails.setRemainingBalance(user.getRemainingBalance());
			userDetails.setBillable(user.isBillable());
			userDetails.setDisabled(user.isDisabled());
			userDetails.setFullTime(user.isFullTime());
			userDetails.setResigned(user.isResigned());
			for(Team team: user.getTeams()){
				TeamDetails teamDetails = new TeamDetails();
				teamDetails.setId(team.getId());
				teamDetails.setName(team.getName());
				teamsDetails.add(teamDetails);
			}
			userDetails.setTeam(teamsDetails);
			usersDetails.add(userDetails);
		}
		return usersDetails;
	}

	public Role saveRole(Role role) {
		return roleRepositry.save(role);
	}

	public User saveUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}
}
