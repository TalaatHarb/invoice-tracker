package net.talaatharb.invoicetracker.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class RequestType {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String typeName;

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	@JoinColumn(name = "request_typeId_fk", referencedColumnName = "id")
	private List<Request> requests = new ArrayList<>();

	public RequestType(String typeName, List<Request> requests) {
		this.typeName = typeName;
		this.requests = requests;
	}

	public RequestType(String typeName){
		this.typeName = typeName;
	}
}
