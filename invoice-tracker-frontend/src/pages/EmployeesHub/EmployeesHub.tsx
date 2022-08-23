import React from "react";
import EmployeeTable from "../../components/employees-hub/EmployeeTable";
import FilterComboBox from "../../components/employees-hub/FilterComboBox";
import Navbar from "../../components/Navbar";

const EmployeesHub=()=>{

    const employees = [
        {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
      {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
      {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
      {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
      {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
      {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
      {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
      {id:1,
        nationalId: "23434454534",
        englishName: "Mohamed",
        arabicName: "محمد ",
        englishAddress: "caire",
        arabicAddress: "القاهرة",
        jobTitle: "developer",
        joiningDate: new Date,
        endDate: new Date,
        allowedBalance: 21,
        remainingBalance: 15,
        billable: true,
        isDisabled: false,
        team: ["back-end","front-end"],
        fulltime: true
      },
    
    ]
        ;
      
    return (
        <div>
           <Navbar/>
       
    <div className="flex flex-col min-h-screen  bg-lightGrey bg-opacity-20 items-center">
        <div className="flex flex-row justify-start w-full">
            <h1 className=" drop-shadow-xl mx-8 my-12 text-5xl text-blueCegedim font-bold">Cegedim Members</h1>
        </div>
        <div className="flex flex-row justify-start w-full">
            <div className="mx-12 my-10">
                <h3 className="text-xl text-black font-medium">Filter by</h3>
                <FilterComboBox/>
            </div>
                <input type="text" className="px-4 py-2 shadow-lg rounded-md max-h-20 text-sm self-center mt-8 " placeholder="search value here"/>
            <div className="flex flex-col justify-end ml-10">
                <label className="mb-2 "><input className="mr-1" id="billable" type="checkbox"/>Billable</label>
                <label className="mb-2"><input className="mr-1" id="disabled" type="checkbox"/>Is disabled</label>
                   <label className="mb-2"><input className="mr-1" id="fulltime" type="checkbox"/>Fulltime</label>
                   
            </div>
            <div className="flex flex-row justify-end mt-28">
              <button className="ml-60 text-base rounded-md px-2 max-h-7 bg-yeollowLightCegedim text-black">Apply</button>
                   <button className="mx-6 text-base rounded-md px-2 max-h-7  bg-yeollowLightCegedim text-black">Clear</button>
            </div>
        </div>

        <EmployeeTable employees={employees}/>
    </div>
    </div>
    )

}

export default EmployeesHub