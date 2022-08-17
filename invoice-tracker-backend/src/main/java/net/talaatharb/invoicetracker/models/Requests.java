package net.talaatharb.invoicetracker.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Requests")
public class Requests {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Request_id;
	private Date End_date;
	private Date Start_date;
	private boolean Billable;
	private boolean Is_full_day;
	private String Comments, request_type;

	@ManyToOne
	@JoinColumn(name = "employee_id")
	User employee;

	public User getEmployee2() {
		return employee;
	}

	public void setEmployee2(User employee2) {
		this.employee = employee2;
	}

	public String getComments() {
		return Comments;
	}

	public Date getStart_date() {
		return Start_date;
	}

	public void setStart_date(Date start_date) {
		Start_date = start_date;
	}

	public Date getEnd_date() {
		return End_date;
	}

	public void setEnd_date(Date end_date) {
		End_date = end_date;
	}

	public boolean GetisIs_full_day() {
		return Is_full_day;
	}

	public void setIs_full_day(boolean is_full_day) {
		Is_full_day = is_full_day;
	}

	public String getRequest_type() {
		return request_type;
	}

	public void setRequest_type(String request_type) {
		this.request_type = request_type;
	}

	public User getEmployee() {
		return employee;
	}

	public void setEmployee(User employee) {
		this.employee = employee;
	}

	public void setComments(String comments) {
		Comments = comments;
	}

	public int getRequest_id() {
		return Request_id;
	}

	public void setRequest_id(int request_id) {
		Request_id = request_id;
	}

}
