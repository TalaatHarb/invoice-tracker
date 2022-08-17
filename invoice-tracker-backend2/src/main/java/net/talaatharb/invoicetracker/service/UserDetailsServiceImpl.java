package net.talaatharb.invoicetracker.service;

import net.talaatharb.invoicetracker.models.Requests;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repository.EmployeeRepo;
import net.talaatharb.invoicetracker.repository.RequestsRepo;
import net.talaatharb.invoicetracker.repository.UserRepository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    EmployeeRepo employeeRepo;
    @Autowired
	RequestsRepo requestsrepo;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

        return UserDetailsImpl.build(user);
    }
    public ArrayList<User> get_EmployeesRequests() {
		ArrayList<User> emp_Requests = new ArrayList<>();
		ArrayList<Requests> requests = new ArrayList<>();
		requestsrepo.findAll().forEach(requests::add);
		for (int i = 0; i < requests.size(); i++) {
			emp_Requests.add(requests.get(i).getEmployee());
		}
		return emp_Requests;
	}

	public Requests update_a_leave_request(int requrst_id, Requests request) {
		Requests requestFromDB = requestsrepo.findById(requrst_id).get();
		System.out.println(requestFromDB.toString());
		requestFromDB.setComments(request.getComments());
		requestFromDB.setEnd_date(request.getEnd_date());
		requestFromDB.setStart_date(request.getStart_date());
		requestFromDB.setIs_full_day(request.GetisIs_full_day());
		requestFromDB.setRequest_type(request.getRequest_type());
		requestsrepo.save(requestFromDB);
		
		return requestFromDB;

	}

}
