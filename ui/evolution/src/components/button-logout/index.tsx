import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "860354870799-orkpm9nlfkdiimhduf8h07pf05tumhu8.apps.googleusercontent.com";

export function Logout() {
    const onSuccess = () => {
        console.log("Log out successfull");
        
    }
    return (
        <div id="signOutButton">
            <GoogleLogin
                clientId={clientId}
                buttonText={"Logout"}
                onAutoLoadFinished={onSuccess}
            />
        </div>
    )
}