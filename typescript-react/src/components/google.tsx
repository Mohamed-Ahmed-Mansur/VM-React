import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Google: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        toast.success("logged in successully");
        navigate("http://localhost:8080/guacamole-1.5.0/");
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
