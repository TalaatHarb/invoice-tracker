import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import React, { useState } from 'react';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import Select from 'react-select';
import  './EmployeeAddcss.css' 




const Options = [
  { value: 'team1', label: 'Team1' },
  { value: 'team2', label: 'Team2' },
  { value: 'team3', label: 'Team3' }
]


function Employee_Add() {
  const [english_name, setEnglishName] = useState("");
  const [Arabic_Name, setArabic_Name] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [Birth_date, setBirth_date] = useState("");
  const [NationalId, setNationalId] = useState("");
  const [EmployeeAddressEnglish, setEmployeeAddressEnglish] = useState("");
  const [EmployeeAddressArabic, setEmployeeAddressArabic] = useState("");
  const [JopTitle, setJopTitle] = useState("");
  const [JoiningDate, setJoiningDate] = useState("");
  const [EmployeeId, setEmployeeId] = useState("");

  const [Email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [AnnualBalance, setAnnualBalance] = useState("");

  const [ISFullTime, setIsFullTime] = useState(false);
  const [MultiplieTeams, setMultiplieTeam] = useState(false);
  const [Billable, setBilliable] = useState(false);
  const [IsDisabiled, setIsDisabiled] = useState(false);

  const [selectedOption, setSelectedOption] = useState<String>();


  const handleSubmit = (event  : any) => {
    event.preventDefault();
    
    const object1 = {
      employee_id:EmployeeId,
      english_name:english_name,
      arabic_name:Arabic_Name,
      password:password,
      birth_date:Birth_date,
      national_id:NationalId,
      employee_adress_english:EmployeeAddressEnglish,
      employee_adress_arabic:EmployeeAddressArabic,
      jop_title:JopTitle,
      joining_date:JoiningDate,
      team_name:selectedOption,
      email:Email,
      mobile_number:MobileNumber,
      is_fullTime:ISFullTime,
      billable:Billable,
      multible_team:MultiplieTeams,
      annual_balance:AnnualBalance,
      is_disabiled:IsDisabiled

    };
   
    fetch_employee(object1);
  }
  /*  */

  const handleOnChangeFullTime = () => {
    setIsFullTime(!ISFullTime);
  };

  const handleOnChangeMultiplieTeam = () => {
    setMultiplieTeam(!MultiplieTeams);
  };

  const handleOnChangeBillable = () => {
    setBilliable(!Billable);
  };

  const handleOnChangeIsDisabiled = () => {
    setIsDisabiled(!IsDisabiled);
  };


 
  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };



  function fetch_employee(prop : any)
  {
     console.log(prop);

     fetch('http://localhost:8080/api/v1/employee/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prop),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((prop) => {
    
      
      
    })
    //Then with the error genereted...
    .catch((error) => {
      
    
    });
  }


  /* */
  
 

  return (
   
    <form onSubmit={handleSubmit}>
      <div>
      <label>English Name:
        <input 
          type="text" 
          value={english_name}
          onChange={(e) => setEnglishName(e.target.value)}
        />
      </label>

      <label>Arabic Name:
        <input 
          type="text" 
          value={Arabic_Name}
          onChange={(e) => setArabic_Name(e.target.value)}
        />
      </label>
      </div>

      <br></br>
      <div>
      <label>Password :
        <input 
          type="password" 
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </label>
      <label>Confirm Password :
        <input 
          type="password" 
          value={confirm_password}
          onChange={(e) => setconfirm_password(e.target.value)}
        />
        
      </label>
      </div>

      <br></br>
      <div>
      <label>Birth Date :
        <input 
          type="Date" 
          value={Birth_date}
          onChange={(e) => setBirth_date(e.target.value)}
        />
      </label>
       
      <label>National ID :
        <input 
          type="number" 
          value={NationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
      </label>
      </div>
      <br></br>
 
      <div>
      <label>Employee Address English :
        <input 
          type="text" 
          value={EmployeeAddressEnglish}
          onChange={(e) => setEmployeeAddressEnglish(e.target.value)}
        />
      </label>
      <label>Employee Address Arabic :
        <input 
          type="text" 
          value={EmployeeAddressArabic}
          onChange={(e) => setEmployeeAddressArabic(e.target.value)}
        />
      </label>
      </div>
      <br></br>
      <div>
      <label>Job Title :
        <input 
          type="text" 
          value={JopTitle}
          onChange={(e) => setJopTitle(e.target.value)}
        />
      </label>

      <label>Joining Date :
        <input 
          type="Date" 
          value={JoiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
        />
      </label>
      </div>
      <br></br>
      <div>
      <label>Employee ID :
        <input 
          type="number" 
          value={EmployeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </label>
      <br></br>
<br></br>
      <label>Team Name : 
      <select className='select1' onChange={selectChange} >
        <option defaultValue={""} >
         
        </option>
        <option value="team1">Team1</option>
        <option value="team2">Team2</option>
        <option value="team3">Team3</option>
        
      </select>


      </label>
      </div>
      <br></br>
      <div>
      <label>Email :
        <input 
          type="email" 
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>Mobile Number :
        <input 
          type="text" 
          value={MobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </label>
      </div>
      <br></br>
      <label>Is FullTime :
      <input
          type="checkbox"
          checked={ISFullTime}
          onChange={handleOnChangeFullTime}
        />
      </label>
      <br></br>
      <label>Multiplie Teams :
        
      <input
          type="checkbox"
          checked={MultiplieTeams}
          onChange={handleOnChangeMultiplieTeam}
        />
      </label>
     

      <br></br>
      <label>Billable :
      <input
          type="checkbox"
          checked={Billable}
          onChange={handleOnChangeBillable}
        />
      </label>
       <br></br>
      <label>Is Disabiled :
      <input
          type="checkbox"
          checked={IsDisabiled}
          onChange={handleOnChangeIsDisabiled}
        />
      </label>
      
     <br></br>
      <input type="submit" />
    </form>

        
  );
}

export default Employee_Add;