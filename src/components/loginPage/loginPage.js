import { Alert, Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import './loginPage.css';
import { sampleData } from "../../dataBase/userData"
import { useAlert } from 'react-alert'


const LoginPage = () => {
    const navigate = useNavigate();
    const alert = useAlert()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordlValue, setPasswordValue] = useState('');
    const [googleUserData, setGoogleUserData] = useState({});
    const [logginedUser, setLogginedUser] = useState({})

    const handleCallbackResponse = (response) => {
        console.log("Encoded JWT ID token" + response.credential);
        let userObject = jwt_decode(response.credential);
        handleGoogleSignInbtn(userObject)
        setGoogleUserData(userObject)
        console.log("userObject", userObject)

    }
    const handleSignInbtn = () => {
        console.log("srikanth")
        const userData1 = sampleData.find((user) => user.email === emailValue);
        const userData2 = sampleData.find((user) => user.password === passwordlValue);
        if (emailValue === '') {
            alert.error("Please enter the Email");
            return

        }
        if (passwordlValue === '') {
            alert.error("Please enter the Password");
            return

        }

        if (userData1 === undefined && userData2 === undefined) {
            alert.error("User doesn't Exist please register");
            return
        }
        if (userData1 === undefined) {
            alert.error("Incorrect Email Id");
            return
        }
        if (userData2 === undefined) {
            alert.error("Incorrect Password")
            return
        }
        if (userData1 && userData2) {
            setLogginedUser(userData1);
            navigate('/dashboard', { state: userData1 });
            alert.success("User logined sucessfully");




        }
        sampleData.push({ email: emailValue, password: passwordlValue });
        console.log(sampleData, "sampledata")


    }
    const handleNewRegister = () => {
        navigate('/registerUser')
    }

    const handleGoogleSignInbtn = (userdata) => {
        console.log("googleUserData", userdata)
        if (userdata) {
            const userData1 = sampleData.find((user) => user.email === userdata.email);

            setLogginedUser(userData1);
            if (userData1 === undefined) {

                navigate('/registerUser', { state: userdata });
                alert.info("New User Fill the details");
                return
            } else {
                userData1.image = userdata.picture
                navigate('/dashboard', { state: userData1 });
                alert.success("User logined sucessfully");
                return
            }

        }

    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "715289641487-t9ojrad43u728tbteudii0rfa5lr8qt0.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
        google.accounts.id.prompt()
    }, [])

    return (
        <>
            <div className="container">
                <div>
                    <div className="title">

                        <h2 style={{ fontFamily: "cursive" }}>
                            User SignIn
                        </h2>
                    </div>
                    <div style={{ padding: "20px", margin: "29px" }}>
                        <div className="emailField" >
                            <TextField type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} id="outlined-basic" label="Please Enter your Email" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                        </div>
                        <div className="passwordField" >

                            <TextField value={passwordlValue} onChange={(e) => setPasswordValue(e.target.value)} id="outlined-basic" label="Please Enter your Password" variant="outlined" type={passwordVisible ? "text" : "password"} style={{ margin: "5px", padding: "5px", marginLeft: "-11px", width: "400px" }} />
                            <Button style={{ marginLeft: "-80px", maxHeight: "20px", marginTop: "27px" }} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? "Hide" : "show"}</Button>
                        </div>
                        <div>
                            <Button variant="contained" style={{ width: "400px", margin: "20px" }} onClick={() => handleSignInbtn()}>Sign IN</Button>
                        </div>
                    </div>
                    <div className="register">
                        <span>New User please</span>
                        <Button onClick={() => handleNewRegister()}>register.....</Button>
                    </div>
                    <div style={{ width: "450px", borderTop: "1px solid black", marginLeft: "46px", marginBottom: "20px" }}></div>
                    <div id="signInDiv" style={{ display: "flex", justifyContent: "center" }} >
                        Sign in with Google
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;
