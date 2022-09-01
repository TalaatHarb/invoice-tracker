import "./Addemployee.scss";
import { CONSTANTS } from "../../utils/constants";
import React, { useState } from "react";
import Navbar from "../Navbar";

import axios from "axios";
import { useAppSelector } from "../../hooks/toolkit-types";

const Options = [
  { value: "team1", label: "team1" },
  { value: "team2", label: "team2" },
  { value: "team3", label: "team3" },
];

const min = 8;
const max = 120;

function Employee_Add() {
  const [englishName, setEnglishName] = useState("");
  const [arabicName, setArabic_Name] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [birthDate, setBirth_date] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [englishAddress, setEmployeeAddressEnglish] = useState("");
  const [arabicAddress, setEmployeeAddressArabic] = useState("");
  const [jopTitle, setJopTitle] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [userId, setEmployeeId] = useState("");

  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [allowedBalance, setAnnualBalance] = useState("0");

  const [isFullTime, setIsFullTime] = useState(false);
  const [MultiplieTeams, setMultiplieTeam] = useState(false);
  const [billable, setBilliable] = useState(false);
  const [isDisabled, setIsDisabiled] = useState(false);

  const [teams, setSelectedOption] = useState<String>();

  const handleSubmit = (event: any) => {
    // event.preventDefault();

    const object1 = {
      userId: userId,
      englishName: englishName,
      arabicName: arabicName,
      password: password,
      birthDate: birthDate,
      nationalId: nationalId,
      englishAddress: englishAddress,
      arabicAddress: arabicAddress,
      jopTitle: jopTitle,
      joiningDate: joiningDate,
      teams: [teams],
      email: email,
      mobileNumber: mobileNumber,
      isFullTime: isFullTime,
      billable: billable,
      MultiplieTeams: MultiplieTeams,
      allowedBalance: allowedBalance,
      isDisabled: isDisabled,
    };

    if (password != confirm_password) {
      alert("password not equal confirm password !");
      return;
    }

    if (password.length < 8) {
      alert("password should be more than 8 digit !");
      return;
    }

    fetch_employee(object1);
  };
  /*  */

  const handleOnChangeBillable = () => {
    setBilliable(!billable);
  };

  const handleOnChangeIsDisabiled = () => {
    setIsDisabiled(!isDisabled);
  };

  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  );

  const config = {
    headers: { Authorization: `Bearer ${isAuthenticated}` },
  };

  /* */
  const fetch_employee = async (prop: any) => {
    console.log({ prop });
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    };

    let res = await axios.post(`${CONSTANTS.BACKEND_URL}/api/employee/add`, prop, config);

    alert(res.data.message);

    setAnnualBalance("");
    setArabic_Name("");
    setBilliable(false);
    setBirth_date("");
    setEmail("");
    setEmployeeAddressArabic("");
    setEmployeeAddressEnglish("");
    setEmployeeId("");
    setEnglishName("");
    setIsDisabiled(false);
    setIsFullTime(false);
    setJoiningDate("");
    setJopTitle("");
    setMobileNumber("");
    setNationalId("");
    setconfirm_password("");
    setpassword("");
    setSelectedOption("");
  };

  function claculate_allowedballance(input: any) {
    setJoiningDate(input);
    var date1 = new Date(input);

    var year = date1.getFullYear() + 1;
    var final_date = "1/1/" + year;

    var date2 = new Date(final_date);
    var number = 21 / 365;

    let difference = date2.getTime() - date1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    let multible = TotalDays * number;
    let balance = multible.toFixed(2);

    var intvalue = Math.ceil(parseFloat(balance));
    setAnnualBalance(intvalue.toString());

    //hellow test
  }

  function add_teams() {}

  return (
    <div>
      <Navbar />
      <br></br>
      <div className="lg:w-100 bg-white shadow rounded">
        <form className="contact-form row" onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="form-field col x-50">
              <input
                required
                className="input-text js-input"
                type="text"
                value={englishName}
                onChange={(e) => setEnglishName(e.target.value)}
              />
              <label className="employee_label">English Name</label>
            </div>
            <div className="form-field col x-50">
              <input
                required
                type="text"
                className="input-text js-input"
                value={arabicName}
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
              <label className="employee_label">Password</label>
            </div>
            <div className="form-field col x-50">
              <input
                required
                type="password"
                className="input-text js-input"
                value={confirm_password}
                onChange={(e) => setconfirm_password(e.target.value)}
                min="8"
                max="120"
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
                value={birthDate}
                onChange={(e) => setBirth_date(e.target.value)}
              />
            </div>
            <div className="form-field col x-50">
              <input
                required
                type="number"
                className="input-text js-input"
                value={nationalId}
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
                value={englishAddress}
                onChange={(e) => setEmployeeAddressEnglish(e.target.value)}
              />

              <label className="employee_label">
                Employee Address in English
              </label>
            </div>
            <div className="form-field col x-50">
              <input
                required
                type="text"
                className="input-text js-input"
                value={arabicAddress}
                onChange={(e) => setEmployeeAddressArabic(e.target.value)}
              />
              <label className="employee_label">
                Employee Address in Arabic
              </label>
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
                value={joiningDate}
                onChange={(e) => claculate_allowedballance(e.target.value)}
              />
            </div>

            <div className="form-field col x-50">
              <input
                required
                type="text"
                className="input-text js-input"
                value={jopTitle}
                onChange={(e) => setJopTitle(e.target.value)}
              />
              <label className="employee_label">Jop Title</label>
            </div>
          </div>
          <br></br>

          <div>
            <div className="form-field col x-50">
              <input
                required
                className="input-text js-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="employee_label">Email</label>
            </div>
            <div className="form-field col x-50">
              <input
                className="input-text js-input"
                type="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <label className="employee_label">Mobile Number</label>
            </div>
          </div>
          <br></br>

          <div>
            <div className="form-field col x-50">
              <select className="input-text js-input" onChange={selectChange}>
                <option defaultValue={""}></option>
                <option value="Team A">Team A</option>
                <option value="Team B">Team A</option>
                <option value="Team C">Team A</option>
              </select>

              <label className="employee_label">Team Name</label>
            </div>
            <div className="form-field col x-50">
              <input
                required
                className="input-text js-input"
                type="number"
                value={userId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
              <label className="employee_label">Emoloyee ID</label>
            </div>
          </div>
          <br></br>

          <div>
            <div className="form-field col x-50">
              <label>
                Is Disabiled :
                <input
                  type="checkbox"
                  checked={isDisabled}
                  onChange={handleOnChangeIsDisabiled}
                />
              </label>

              <label>
                &nbsp;&nbsp; Billable :
                <input
                  type="checkbox"
                  checked={billable}
                  onChange={handleOnChangeBillable}
                />
              </label>
            </div>
            <div className="form-field col x-50">
              <span> Annual Balance : </span>
              <span className="dot">{allowedBalance}</span>
            </div>
          </div>
          <br></br>

          <div className="form-field col x-100 align-center">
            <input
              className="employee-submit-btn"
              type="button"
              onClick={handleSubmit}
              value="Add User"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Employee_Add;
