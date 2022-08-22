

import  './Addemployee.scss' 



import React, { useState } from 'react';




const Field = ({ label, id, error, ...rest } : any) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);



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
  const [AnnualBalance, setAnnualBalance] = useState("0/21");

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
    
      alert('user has been added successfully')
      
    })
    //Then with the error genereted...
    .catch((error) => {
      alert('Faild to add user !')

    
    });
  }


  /* */
  
 

  return (
  
      
    <div className="lg:w-100 bg-white shadow rounded">
     
    <form className="contact-form row" onSubmit={handleSubmit}>
      <div>
       <div className="form-field col x-50">
         
          <input 
          required
          className="input-text js-input"
          type="text" 
          value={english_name}
          onChange={(e) => setEnglishName(e.target.value)}
        />
          <label className="employee_label" >English Name</label>
       </div>
       <div className="form-field col x-50" >
          <input 
          required
          type="text" 
          className="input-text js-input"
          value={Arabic_Name}
          onChange={(e) => setArabic_Name(e.target.value)}
        />

          <label className="employee_label">Arabic Name</label>
          
       </div>
       </div>
   

       <br></br>
       <div>
       <div className="form-field col x-50">

          <input 
          required
          type="password" 
          className="input-text js-input"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
          <label className="employee_label" >Password</label>
       </div>
       <div className="form-field col x-50">

          <input 
          required
          type="password" 
          className="input-text js-input"
          value={confirm_password}
          onChange={(e) => setconfirm_password(e.target.value)}
        />
          <label className="employee_label">Confirm Password</label>
       </div>
       
      
       </div>
       <br></br>


       <div>
       <div className="form-field col x-50">
         <label className="employee_label">Birth Date</label>
       <input 
       required
          type="Date" 
          className="input-text js-input"         
          value={Birth_date}
          
          onChange={(e) => setBirth_date(e.target.value)}
        />

       </div>
       <div className="form-field col x-50">

          <input 
          required
          type="number" 
          className="input-text js-input"
          value={NationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
          <label className="employee_label">National ID</label>
       </div>
       
      
       </div>
       <br></br>

       <div>
       <div className="form-field col x-50">
          <input 
          required
          type="text" 
          className="input-text js-input"
          value={EmployeeAddressEnglish}
          onChange={(e) => setEmployeeAddressEnglish(e.target.value)}
        />

          <label className="employee_label" >Employee Address in English</label>
       </div>
       <div className="form-field col x-50">

          <input 
          required
          type="text" 
          className="input-text js-input"
          value={EmployeeAddressArabic}
          onChange={(e) => setEmployeeAddressArabic(e.target.value)}
        />
          <label className="employee_label">Employee Address in Arabic</label>
       </div>
       
      
       </div>
       <br></br>


       <div>
       <div className="form-field col x-50">
         <label className="employee_label">Joining Date</label>
       <input 
       required
          type="Date" 
          className="input-text js-input"         
          value={JoiningDate}
          
          onChange={(e) => setJoiningDate(e.target.value)}
        />

       </div>
       
       <div className="form-field col x-50">
       <input
       required 
          type="text" 
          className="input-text js-input"
          value={JopTitle}
          onChange={(e) => setJopTitle(e.target.value)}
        />
          <label className="employee_label" >Jop Title</label>
       </div>
      
       </div>
       <br></br>




     



       <div>
       <div className="form-field col x-50">
          <input 
          required
          className="input-text js-input"
          type="email" 
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <label className="employee_label" >Email</label>
       </div>
       <div className="form-field col x-50">
          <input 
          className="input-text js-input"
          type="text" 
          value={MobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
          <label className="employee_label">Mobile Number</label>
       </div>
       
      
       </div>
       <br></br>

       <div>
       <div className="form-field col x-50">
          <select className="input-text js-input" onChange={selectChange} >
        <option defaultValue={""} >
         
        </option>
        <option value="team1">Team1</option>
        <option value="team2">Team2</option>
        <option value="team3">Team3</option>
        
      </select>
      <label className="employee_label">Team Name</label>
       </div>
       <div className="form-field col x-50">
          
          <input 
          required
          className="input-text js-input"
          type="number" 
          value={EmployeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
          <label className="employee_label">Emoloyee ID</label>
       </div>
       
      
       </div>
       <br></br>


       <div>
       <div className="form-field col x-50">
          
       <label>Is Disabiled :
      <input
          type="checkbox"
          checked={IsDisabiled}
          onChange={handleOnChangeIsDisabiled}
        />
      </label>

      <label>&nbsp;&nbsp; Billable :
      <input
          type="checkbox"
          checked={Billable}
          onChange={handleOnChangeBillable}
        /> 
         </label>

       </div>
       <div className="form-field col x-50">
     
      <span> Annual Balance : </span>
      <span className="dot">{AnnualBalance}</span>

     
       </div>
       
      
       </div>
       <br></br>




       <div className="form-field col x-100 align-center">
          <input className="employee-submit-btn" type="submit" value="Add User"  />
       </div>

    </form>
    </div>
       

  );
}

export default Employee_Add;