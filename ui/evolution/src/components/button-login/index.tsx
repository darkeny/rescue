import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "860354870799-orkpm9nlfkdiimhduf8h07pf05tumhu8.apps.googleusercontent.com";

export function Login() {
    const onSuccess = (res) => {
        console.log("Login Success! Current user:", res.profileObj);

    }

    const onFailure = (res) => {
        console.log("Login Failure", res);

    }
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Continuar com o Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />


        </div>
    )
}