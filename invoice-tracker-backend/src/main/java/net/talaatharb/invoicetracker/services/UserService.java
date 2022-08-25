package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.dtos.TeamDetails;
import net.talaatharb.invoicetracker.dtos.UserDetails;
import net.talaatharb.invoicetracker.models.ERole;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.models.RequestType;
import net.talaatharb.invoicetracker.models.Role;
import net.talaatharb.invoicetracker.models.Team;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.RequestRepository;
import net.talaatharb.invoicetracker.repositories.RequestTypeRepository;
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

	@Autowired
	private final RequestRepository requestRepository;

	@Autowired
	private final RequestTypeRepository requestTypeRepository;

	public void addRoleToUser(String email, ERole userRole) {
		Optional<User> user = userRepository.findByEmail(email);
		Optional<Role> role = roleRepositry.findByName(userRole);
		if (user.isPresent() && role.isPresent()) {
			user.get().getRoles().add(role.get());
		}
	}

	public User getUser(long id) {
		return userRepository.findById(id).orElse(null);

	}

	public List<UserDetails> getUsers() {

		ArrayList<User> users = (ArrayList<User>) userRepository.findAll();
		ArrayList<UserDetails> usersDetails = new ArrayList<>();

		for (User user : users) {
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
			for (Team team : user.getTeams()) {
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

	public void saveRequest(Long ID, String type, Request request) {
		requestRepository.save(request);
		User user = userRepository.findById(ID).get();
		user.getRequests().add(request);
		request.setRequestedBy(ID);
		RequestType Rtype = requestTypeRepository.findByTypeName(type);
		request.setType(type);
		Rtype.getRequests().add(request);

	}

	public void saveRequestType(RequestType type) {
		requestTypeRepository.save(type);
	}

	@Transactional
	public ResponseEntity<String> updateUser(long id, UserDetails userDetails) {
		System.out.println(userDetails.toString());
		System.out.println("entered service");
		User user = userRepository.findById(id).get();
		if (userDetails.getEnglishName() != null) {
			user.setEnglishName(userDetails.getEnglishName());
		}
		if (userDetails.getJobTitle() != null) {
			user.setJobTitle(userDetails.getJobTitle());
		}
		if (userDetails.getEmail() != null) {
			user.setEmail(userDetails.getEmail());
		}
		if (userDetails.getMobileNumber() != null) {
			user.setMobileNumber(userDetails.getMobileNumber());
		}
		if (userDetails.getJoiningDate() != null) {
			user.setJoiningDate(userDetails.getJoiningDate());
		}
		if (userDetails.getEndDate() != null) {
			if (userDetails.isResigned()) {
				user.setEndDate(userDetails.getEndDate());
				user.setResigned(userDetails.isResigned());
			}
		}
		return new ResponseEntity<>("Updating employee data success", HttpStatus.OK);
	}
}
