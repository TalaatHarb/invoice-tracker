import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/toolkit-types";
import { loginUser } from "../../services/redux/slices/AuthenticationSlice";
import CegedimLogo from "../../assets/Cegedim_Logo.jpg";
import LoginImage from "../../assets/LOGIN_IMAGE.avif";
import Button from "../../components/Button";
import InputComponent from "../../components/Input";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const StyledWrapper = styled.div`
  background-color: rgb(208 206 207);
  height: 100%;
  min-height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 11px 37px;
  font-size: 23px;
  color: white;
  border: 1px solid black;
  background-color: gray;
  position: absolute;
  right: 45%;
  background-color: black;
`;
const Wrapper = styled.div`
  padding: 7px;
`;
const Input = styled.div`
  padding: 22px;
  display: flex;
`;
const Span = styled.span`
  padding-right: 120px;
  font-size: 22px;
`;
const SpanSelect = styled.span`
  padding-right: 78px;
  font-size: 22px;
`;
const StyledInput = styled.input`
  padding-right: 50px;
  font-size: 22px;
  margin-left: 46px;
`;
const StyledSelect = styled.select`
  padding-right: 50px;
  font-size: 22px;
`;
const Styleddropdown = styled.select`
  padding-right: 50px;
  font-size: 22px;
  margin-left: 63px;
`;

const Styleddate = styled.div`
  font-size: 26px;
  margin-left: 54px;
`;

const Popup = ({ datapage, submit }: any) => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledWrapper>
      <Wrapper>
        <Input>
          <SpanSelect>Absence Type</SpanSelect>
          <StyledSelect name="cars" id="cars">
            <option value="volvo">Emergency Leave</option>
            <option value="saab">Paid Leave</option>
            <option value="opel">Maternity Leave</option>
            <option value="audi">Sickness Leave</option>
            <option value="audi">Unpaid Leave</option>
            <option value="audi">Lieu Leave</option>
          </StyledSelect>
        </Input>
        <Input>
          <Span>start</Span>
          <Styleddate>
            {" "}
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </Styleddate>
          <Styleddropdown name="cars" id="cars">
            <option value="volvo">Full Day</option>
            <option value="saab">Half Day</option>
            <option value="opel"></option>
            <option value="audi"></option>
          </Styleddropdown>
        </Input>
        <Input>
          <Span>End</Span>{" "}
          <Styleddate>
            {" "}
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </Styleddate>
        </Input>
        <Input>
          <Span>Comment</Span>
          <textarea id="w3review" name="w3review" rows={4} cols={77}></textarea>
        </Input>
        <StyledButton
          onClick={() => {
            navigate("/hr");
          }}
        >
          submit
        </StyledButton>
      </Wrapper>
    </StyledWrapper>
  );
};
export default Popup;
