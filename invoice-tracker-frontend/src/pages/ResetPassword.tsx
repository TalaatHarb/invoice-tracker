import React, {useState} from "react";
import { useParams } from "react-router";
import { SERVER } from "../utils/config";
import { FetchFacad } from "../utils/FetchFacad";
import { IMessageBar, IResetPasswrodBody, MessageBar } from "../utils/types";

function ResetToken(){
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");
    const [barMessage, setBarMessage] = useState(null as unknown as MessageBar);

    const {resetToken} = useParams();


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
            setBarMessage(new MessageBar("error", "Something went wrong"));
            return;
        }

        // to-do : validation of passwords for the provided regex in config file
        
        console.log(resetToken);

        const data = {resetToken, password};
        const fetchFacad = FetchFacad.getFetchFacad();
        const result = await fetchFacad.postData<IResetPasswrodBody, IMessageBar>(`${SERVER}/password/reset`, data);
        console.log(result);
        setBarMessage(result);

    }

    return (
        <div>
            <form>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <input type="password" value={rPassword} onChange={handleRPasswordChange} />
                <input type="submit" onClick={handleSubmitClick} />
            </form>
        </div>
    )
}

export default ResetToken;