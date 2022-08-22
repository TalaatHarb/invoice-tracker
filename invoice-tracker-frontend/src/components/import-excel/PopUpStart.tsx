import React from 'react';
import { useState } from "react";
import PopUpExcel from './PopUpExcel';
import  './popup-startcss.scss'

import {BsFillArrowUpSquareFill} from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Navbar } from 'react-bootstrap';



function PopUpStart() {
  const  [buttonpopup,setButtonpopup] = useState(false);

  function OpenAddEmployee()
  {

  }
  /*  */
  
  return (
   

    <div>
     
       <div className="PopUpStart">
        <main className='main'>
          
       
       <BsFillArrowUpSquareFill  className='PopUppic1'/>
       <div> <p className='PopUphover' >Export Employees</p></div>
       <BsFillArrowDownSquareFill className='PopUppic1' />
        <p className='PopUphover' onClick={() => setButtonpopup(true)}>Post From Clibord </p>
        <BsFillPlusSquareFill className='PopUppic1' />
        <p onClick={() => OpenAddEmployee()} className='PopUphover' >Add New Employee </p>
         <pre>                        </pre>
         <PopUpExcel  popup={buttonpopup} setpopup={setButtonpopup}></PopUpExcel>
   

        </main>
          

        </div>    

        </div>
  );
}

export default PopUpStart;