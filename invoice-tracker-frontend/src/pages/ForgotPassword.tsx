import React, { useState } from "react";
import { emailRegex, ERROR, SERVER } from "../utils/config";
import { FetchFacad } from "../utils/FetchFacad";
import { IForgotPasswordBody, IMessageBar, MessageBar } from "../utils/types";


function ForgotPassword(){
    const [email, setEmail] = useState("");

    const [isInvalid, setIsInvalid] = useState(false);

    const [errMessage, setErrMessage] = useState(new MessageBar(ERROR, "Please Enter a Valid Email"));


    const handleEmailChange = (ev:any)=> {
        setEmail(ev.target.value);
    }

    // email validation: contains "@" , "." and multible characters within them.
    const handleSubmitClick = async (e:any)=>{
        e.preventDefault();
        if(!emailRegex.test(email)){
            setErrMessage(new MessageBar(ERROR, "Please Enter a Valid Email"))
            !isInvalid && setIsInvalid(true);
            return;
        }

        isInvalid && setIsInvalid(false);

        const fetchFacad = FetchFacad.getFetchFacad();
        
        try{
            const result = await fetchFacad.postData<IForgotPasswordBody, IMessageBar>(`${SERVER}/password/forgot`, {email: email});
            console.log(result);
            if(result.type === ERROR){
                const {message} = result;
                setIsInvalid(true);
                setErrMessage((state)=>({...state, message}))                
            }

        }catch(e){
            console.log(e);
        }
    }

    return(

        <div className="w-screen h-screen flex items-center justify-center text-center text-darkGrey">

            {/* <div className="mb-6 w64 "> */}

            <form className="text-gray-500 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmitClick}>
                <h1 className="text-3xl font-bold">Reset Your Password</h1>
                <br/>
                <h3 className="font-bold">Password Recovery Information</h3>
                <h4>We will send your instructions on how to reset your password</h4>
                <br/>
                <div className="mb-4 text-left">
                    <input className={"shadow text-black appearance-none border focus:border-blueCegedim rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:border focus:outline-none focus:border-blue-500 focus:shadow-outline" + (isInvalid ? " border-red" : "")} type="text" placeholder="Enter Your Email" 
                    value = {email} onChange = {handleEmailChange}/>
                    
                    <p className={"text-red text-sm" + (!isInvalid ? " hidden" : "")}>{errMessage.message.slice(0, 40) + (errMessage.message.length > 40 ? "..." : "")}</p>
                </div>
                <div className="flex items-center justify-center">    
                    <input type="submit" className="transition-colors bg-blueCegedim w-full h-12 hover:bg-darkBlue text-white font-bold text-lg py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" value="Send Me Email" />
                </div>
                {/* <a href="/home">Go Back</a> */}
            </form>
        </div>

    )
}

export default ForgotPassword;