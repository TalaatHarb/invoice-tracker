package net.talaatharb.invoicetracker.dtos;

import java.util.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import lombok.Data;
import net.talaatharb.invoicetracker.models.RequestType;
import net.talaatharb.invoicetracker.models.Team;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestLeaveBody {

     
    int id ;      
    private int allowedBalance;

	private int remainingBalance;
 	private String userArabicName ;
    
    private  String userEnglishNane ;
    private Date requestDate;
    private List<Team> teams;
	private boolean billable;
    private RequestType type;




}
