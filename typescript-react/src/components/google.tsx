import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";

const Google: React.FC = () => {

    const handleLoginSuccess = () => {
        toast.success("logged in successully");
        window.location.href = "http://192.168.136.129:8190/#/";
    }

    return (
        <GoogleOAuthProvider clientId="822438674667-8jfo5kfet1gs8vlr6llil57a1d86vn78.apps.googleusercontent.com">
            <GoogleLogin
            type="icon"
            onSuccess={handleLoginSuccess}
            onError={() => {
                toast.error("login failed");
            }}
            >
            </GoogleLogin>
        </GoogleOAuthProvider>
    );
};

export default Google;
