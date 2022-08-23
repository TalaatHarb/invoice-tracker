package net.talaatharb.invoicetracker.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.talaatharb.invoicetracker.dtos.UserDto;
import net.talaatharb.invoicetracker.models.*;
import net.talaatharb.invoicetracker.models.ERole;
import net.talaatharb.invoicetracker.models.Role;
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
	private final ExcelHelper excelHelper;
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

	public List<User> getUsers() {
		return userRepository.findAll();
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
		RequestType Rtype= requestTypeRepository.findByTypeName(type);
		request.setType(type);
		Rtype.getRequests().add(request);


	}

	public void saveRequestType(RequestType type) {
		requestTypeRepository.save(type);
	}


	// save employee apdo
	public void SaveEmployee(UserDto employee) {
		try {

			User employee1 = excelHelper.add_employee_helper(employee);
			userRepository.save(employee1);


		} catch (Exception e) {
			throw new RuntimeException("fail to save New User : " + e.getMessage());
		}
	}

}
