import React from 'react';
import { useState } from "react";
import PopUpExcel from './PopUpExcel';
import  './startcss.css'

import {BsFillArrowUpSquareFill} from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";

import { BsFillArrowDownSquareFill } from "react-icons/bs";



   



function PopUpStart() {
  const  [buttonpopup,setButtonpopup] = useState(false);

  function OpenAddEmployee()
  {
   
  }
  /*  */
  
  return (
   
      
       <div className="Start">
        <main className='main'>

       
       <BsFillArrowUpSquareFill  className='pic1'/>
       <div> <p className='hover' >Export Employees</p></div>
       <BsFillArrowDownSquareFill className='pic1' />
        <p className='hover' onClick={() => setButtonpopup(true)}>Post From Clibord </p>
        <BsFillPlusSquareFill className='pic1' />
        <p onClick={() => OpenAddEmployee()} className='hover' >Add New Employee </p>
         <pre>                        </pre>
         <PopUpExcel  popup={buttonpopup} setpopup={setButtonpopup}></PopUpExcel>
   

        </main>
          

        </div>    

        
  );
}

export default PopUpStart;