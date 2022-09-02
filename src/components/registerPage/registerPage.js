import { Button } from "@material-ui/core";
import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { sampleData } from "../../dataBase/userData";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'
const RegisterUser = () => {
    const location1 = useLocation();
    const alert = useAlert()
    const navigate = useNavigate();
    console.log("profilepage", location1.state)
    const [age, setAge] = useState()
    const [collegeName, setCollegeName] = useState()
    const [currentCompany, setCurrentCompany] = useState()
    const [email, setEmail] = useState(location1?.state?.email || "")
    const [experience, setExperience] = useState()
    const [location, setLocation] = useState()
    const [name, setName] = useState()
    const [qualification, setQualification] = useState()
    const [techstack, setTechStack] = useState();
    // const textfieldData = [{label:"name",onchange:setName},{label:"email",onchange:setEmail},{label:"techstack",onchange:setTechStack},{label:"experience",onchange:setExperience},{label:"currentCompany",onchange:setCurrentCompany},{label:"qualification",onchange:setQualification},{label:"location",onchange:setLocation},{label:"collegeName",onchange:setCollegeName},{label:"age",onchange:setAge }]
    return (
        <>

            <div className="cointainer">
                <div>
                    <Typography variant="h4" style={{ fontFamily: "cursive" }}>{`User Registration page`}</Typography>
                </div>
                {/* {textfieldData&&textfieldData.map((data)=>(
                    <>
                    <div>
                        <TextField name={data.label} type="text" value={data.label} onChange={(e)=>{data.onchange(e.target.value)}} id="outlined-basic" label={`Please enter your ${data.label}`} variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} ></TextField>
                    </div>
                    </>
                ))} */}
                <div>
                    <TextField name="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} id="outlined-basic" label="Please Enter your Name" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled={location1?.state?.email ? true : false} name="email" value={email} id="outlined-basic" onChange={(e) => { setEmail(e.target.value) }} label="Please Enter your Email" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField name="techstack" value={techstack} id="outlined-basic" onChange={(e) => { setTechStack(e.target.value) }} label="Please Enter your Techstack" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField name="experience" value={experience} type="number" id="outlined-basic" onChange={(e) => { setExperience(e.target.value) }} label="Please Enter your Experience" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField name="currentCompany" value={currentCompany} id="outlined-basic" onChange={(e) => { setCurrentCompany(e.target.value) }} label="Please Enter your CurrentCompany" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>

                <div>
                    <TextField name="qualification" value={qualification} id="outlined-basic" onChange={(e) => { setQualification(e.target.value) }} label="Please Enter your Qualification" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField name="location" value={location} id="outlined-basic" onChange={(e) => { setLocation(e.target.value) }} label="Please Enter your location" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField name="collegeName" value={collegeName} id="outlined-basic" onChange={(e) => { setCollegeName(e.target.value) }} label="Please Enter your CollegeName" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField name="age" type="number" value={age} id="outlined-basic" onChange={(e) => { setAge(e.target.value) }} label="Please Enter your Age" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <Button variant="outlined" fullWidth onClick={() => {
                        if (!email || !name || !experience || !qualification || !techstack || !currentCompany || !age || !location || !collegeName) {
                            alert.info("Please enter all the Details");
                            return
                        }
                        let userRegisterData = {
                            email,
                            name,
                            experience,
                            qualification,
                            techstack,
                            currentCompany,
                            age,
                            location,
                            collegeName,
                            password: email.split('@')[0]

                        }
                        sampleData.push(userRegisterData)
                        navigate("/dashboard", { state: userRegisterData })
                    }}>Save</Button>
                </div>
                {console.log(sampleData)}
            </div>
        </>

    )
}

export default RegisterUser