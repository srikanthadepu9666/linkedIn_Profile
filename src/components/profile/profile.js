import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './profile.css'
import { sampleData } from "../../dataBase/userData"
const Profile = (props) => {
    const navigate = useNavigate();
    // let { age, collegeName, currentCompany, email, experience, location, name, qualification, techstack } = props.data
    const [userDataedit, setUserDataEdit] = useState(true)
    const userLoginData = sampleData.find(user => user.email === props.data.email)
    const [userdata, setUserData] = useState(userLoginData)
    const [age, setAge] = useState(props.data.age)
    const [collegeName, setCollegeName] = useState(props.data.collegeName)
    const [currentCompany, setCurrentCompany] = useState(props.data.currentCompany)
    const [email, setEmail] = useState(props.data.email)
    const [experience, setExperience] = useState(props.data.experience)
    const [location, setLocation] = useState(props.data.location)
    const [name, setName] = useState(props.data.name)
    const [qualification, setQualification] = useState(props.data.qualification)
    const [techstack, setTechStack] = useState(props.data.techstack)


    console.log("userDataqqqqqqq", userdata)
    console.log("sataprofile", location.state)
    if (props.data === null) {
        navigate("/")
    }
    // const handleEditUserDetails = (e) => {
    //     userdata[e.target.name] = e.target.value
    //     console.log(userdata[e.target], "values")
    // }
    console.log(userdata, "values2222222222222")

    return (

        <>
            <div className="cointainer">
                <div>
                    <Typography variant="h4" style={{ fontFamily: "cursive" }}>{`${name} profile page`}</Typography>
                </div>
                <div>
                    <TextField disabled={userDataedit} name="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} id="outlined-basic" label="Please Enter your Name" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled="true" name="email" value={email} id="outlined-basic" onChange={(e) => { setEmail(e.target.value) }} label="Please Enter your Email" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled={userDataedit} name="techstack" value={techstack} id="outlined-basic" onChange={(e) => { setTechStack(e.target.value) }} label="Please Enter your Techstack" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled={userDataedit} name="experience" value={experience} type="number" id="outlined-basic" onChange={(e) => { setExperience(e.target.value) }} label="Please Enter your Experience" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled={userDataedit} name="currentCompany" value={currentCompany} id="outlined-basic" onChange={(e) => { setCurrentCompany(e.target.value) }} label="Please Enter your CurrentCompany" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>

                <div>
                    <TextField disabled={userDataedit} name="qualification" value={qualification} id="outlined-basic" onChange={(e) => { setQualification(e.target.value) }} label="Please Enter your Qualification" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled={userDataedit} name="location" value={location} id="outlined-basic" onChange={(e) => { setLocation(e.target.value) }} label="Please Enter your location" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled={userDataedit} name="collegeName" value={collegeName} id="outlined-basic" onChange={(e) => { setCollegeName(e.target.value) }} label="Please Enter your CollegeName" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <TextField disabled={userDataedit} name="age" type="number" value={age} id="outlined-basic" onChange={(e) => { setAge(e.target.value) }} label="Please Enter your Age" variant="outlined" style={{ margin: "5px", padding: "5px", width: "400px" }} />
                </div>
                <div>
                    <Button variant="outlined" fullWidth onClick={() => {
                        setUserDataEdit(!userDataedit);
                        if (!userDataedit) {
                            let data = sampleData.find(user => user.email === email)
                            console.log(data, "values3 before");
                            sampleData[1] = {
                                email,
                                name,
                                experience,
                                qualification,
                                techstack,
                                currentCompany,
                                age,
                                location,
                                collegeName
                            }
                            console.log(data, "values3 afterrrr");
                            console.log(sampleData, "sampleData afterrrr");
                        }
                    }}>{!userDataedit ? "Save" : "Edit"}</Button>
                </div>
                
            </div>
        </>
    )
}

export default Profile