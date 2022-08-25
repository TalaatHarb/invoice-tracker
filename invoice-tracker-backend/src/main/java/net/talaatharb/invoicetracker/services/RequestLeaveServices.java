package net.talaatharb.invoicetracker.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Data;
import net.talaatharb.invoicetracker.dtos.RequestLeaveBody;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.RequestRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
@Transactional
@Data
public class RequestLeaveServices {
	@Autowired
	RequestRepository requestRepo;
	@Autowired
	UserRepository userRepository;

	public ArrayList<RequestLeaveBody> get_EmployeesRequests() {
		ArrayList<Request> requests = new ArrayList<>();
		ArrayList<RequestLeaveBody> requestsBody = new ArrayList<>();

		requests.addAll(requestRepo.findAll());
		for (int i = 0; i < requests.size(); i++) {
			Long UserId = requests.get(i).getRequestedBy();
			User user = userRepository.findById(UserId).get();
			RequestLeaveBody body = new RequestLeaveBody();
			body.setId(i);
			body.setUserEnglishNane(user.getEnglishName());
			body.setUserArabicName(user.getArabicName());
			body.setAllowedBalance(user.getAllowedBalance());
			body.setRemainingBalance(user.getRemainingBalance());
			body.setTeams(user.getTeams());
			body.setBillable(user.isBillable());
			body.setType(requests.get(i).getType());
			body.setRequestDate(requests.get(i).getRequestDate());
			

			requestsBody.add(body);

		}

		return requestsBody;
	}


	public Request update_a_leave_request(int requestId, Request request) {
		Request requestFromDB = requestRepo.findById((long) requestId).get();
		System.out.println(requestFromDB.toString());
		requestFromDB.setComment(request.getComment());
		requestFromDB.setEndDate(request.getEndDate());
		requestFromDB.setEndDate(request.getEndDate());
		requestFromDB.setFullDay(request.isFullDay());
		requestFromDB.setType(request.getType());
		requestRepo.save(requestFromDB);

		return requestFromDB;

	}
}
