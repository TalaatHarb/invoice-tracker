import React, {useState} from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { ERROR, passwordRegex, SERVER } from "../../utils/config";
import { FetchFacad } from "../../utils/FetchFacad";
import { IMessageBar, IResetPasswrodBody, MessageBar } from "../../utils/types";

function ResetToken(){
    // states
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");

    const [barMessage, setBarMessage] = useState(null as unknown as MessageBar);

    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [rPasswordInvalid ,setRPasswordInvalid] = useState(false);

    // router
    const {resetToken} = useParams();
    const navigateTo = useNavigate();


    // handlers
    const handlePasswordChange = (e:any):void=>{
        setPassword(e.target.value);
    }
    
    const handleRPasswordChange = (e:any):void=>{
        setRPassword(e.target.value);
    }

    const handleSubmitClick = async (e:any):Promise<void>=>{
        e.preventDefault();

        if(!resetToken){
            // setBarMessage(new MessageBar("error", "Something went wrong"));
            toast.error("someting went wrong");
            return;
        }

        if(!passwordRegex.test(password)){
            !passwordInvalid && setPasswordInvalid(true);
            return;
        }
        passwordInvalid && setPasswordInvalid(false);

        if(password !== rPassword){
            !rPasswordInvalid && setRPasswordInvalid(true);
            return;
        }
        rPasswordInvalid && setRPasswordInvalid(false);

        const data = {resetToken, password};
        const result = await FetchFacad.getFetchFacad().postData<IResetPasswrodBody, IMessageBar>(`${SERVER}/password/reset`, data);
        
        if(result.type !== ERROR){
            toast.success(result.message);
            navigateTo("/login");
        }else{
            toast.error(result.message);
            navigateTo("/forgot-password");
        }
        
        console.log(result);
        setBarMessage(result);
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center text-center">
            <form  className="text-gray-500 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96"
            onSubmit={handleSubmitClick}>
                <div className="mb-4">
                    <input type="password" className={"shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:border focus:outline-none focus:border-blueCegedim focus:shadow-outline" + (passwordInvalid ? " border-1 border-red" : "")} placeholder="Enter New Password" autoFocus
                    value = {password} onChange = {handlePasswordChange}/>
                    <p className={"text-red text-xs" + (!passwordInvalid ? " hidden" : "")}> &gt; 8 , 1 uppercase, 1 number and 1 special character</p>
                </div>
                <div className="mb-4">
                    <input type="password" className={"shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:border focus:outline-none focus:border-blueCegedim focus:shadow-outline" + (rPasswordInvalid ? " border-1 border-red" : "")} placeholder="Confirm Password" 
                    value = {rPassword} onChange = {handleRPasswordChange}/>    
                    <p className={"text-red text-sm" + (!rPasswordInvalid ? " hidden" : "")}>Please enter the same password</p>
                </div>
                <div className="flex items-center justify-center">    
                    <input type="submit" className=" bg-blueCegedim  w-full h-12 hover:bg-darkBlue transition-colors text-white font-bold text-lg py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    value="Reset" />
                </div>
            </form>
        </div>
    )
}

export default ResetToken;