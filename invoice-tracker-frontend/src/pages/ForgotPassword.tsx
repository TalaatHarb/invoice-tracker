import React, { useState } from "react";
import { ERROR, SERVER } from "../utils/config";
import { FetchFacad } from "../utils/FetchFacad";
import { IForgotPasswordBody, IMessageBar, MessageBar } from "../utils/types";

function ForgotPassword(){
    const [email, setEmail] = useState("");

    const [isInvalid, setIsInvalid] = useState(false);

    const [errMessage, setErrMessage] = useState(new MessageBar(ERROR, "Please Enter a Valid Email"))


    const handleEmailChange = (ev:any)=> {
        setEmail(ev.target.value);
    }

    const handleSubmitClick = async ()=>{
        if(email === "some"){
            setIsInvalid(true);
            return;
        }else{
            setIsInvalid(false);
        }

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

        <div className="w-screen h-screen flex items-center justify-center">

            {/* <div className="mb-6 w64 "> */}

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Your Email" 
                        value = {email} onChange = {handleEmailChange}/>
                        
                        <p className={"text-red-400 text-sm" + (!isInvalid ? " hidden" : "")}>{errMessage.message}</p>
                    </div>
                    <div className="flex items-center justify-between">    
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={handleSubmitClick}>
                            Submit
                        </button>
                    </div>
                </form>
        </div>

    )
}

export default ForgotPassword;