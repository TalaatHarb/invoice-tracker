package net.talaatharb.invoicetracker.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.talaatharb.invoicetracker.dtos.RequestLeaveBody;
import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.services.RequestLeaveServices;

@RestController
@RequestMapping("/Requests")

public class RequestController {
	@Autowired
	RequestLeaveServices leaveServices;
	 @GetMapping("/LeaveRequests")
		public ResponseEntity<ArrayList<RequestLeaveBody>> getUsers() {
			return ResponseEntity.ok().body(leaveServices.get_EmployeesRequests());
		}

		@PutMapping("/UpdateLeaveRequest/{request_id}")
		public ResponseEntity<Request> UpdateEmployeeRequest(@RequestBody Request req, @RequestParam int request_id) {

			return new ResponseEntity<>(leaveServices.update_a_leave_request(request_id, req), HttpStatus.OK);

		}
}
