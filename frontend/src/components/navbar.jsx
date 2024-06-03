import { Button, Card, IconButton, Typography } from "@mui/material";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";
import axios from "axios";

function AppbarAdmin() {
   const navigate = useNavigate();
    const[email, setEmail] = useState(null);
   

    useEffect(() => {

        function callback2(data) {
            if (data.email) {
                setEmail(data.email);
            }
            console.log(data);
        }
    
        function callback1(response) {
            callback2(response.data);
        }
    
        axios.get('https://brain-op-beta.vercel.app/user/me', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(callback1)
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []);

   
   if(email){
    return (
    <>
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#00000011"

    }}>
        <div
        onClick={() => {
            navigate("/");
        }}
        >
            
        <Typography variant="h5" style={{fontWeight:"600"}}>BrainOp</Typography>
        </div>
        <div style={{display: "flex"}}>
        <div style={{
            padding: 10,
            backgroundColor:"#ffffff"
        }}>
           <strong>User-Email: </strong> {email}
        </div>
        <div style={{marginRight: 10}}>
       
        <Button variant="contained"
        style={{
            marginLeft: 10,
            color: "black",
            // border:"2px solid black"
            backgroundColor: 'white',
        }}
        onClick={() => {
                                navigate("/addPost")
                            }}
                        >Add Post</Button>

<Button
         variant="contained" 
         style={{
            marginLeft: 10,
            color: "black",
            // border:"2px solid black"
            backgroundColor: 'white',
        }}
         onClick={() => {
            localStorage.setItem("token", null);
            window.location = "/"
            
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              //navigate("/signup")
         }}
         ><strong>Log Out</strong></Button>
        </div>
    </div>
    </div>
    
     </>
    )
    
   }

   else{
    
    return(
        <div>
            <div className="flex flex-wrap justify-between bg-slate-400 m-1 p-2">
                <div>
                    
        <Typography variant="h5" style={{fontWeight:"600"}} onClick={() => {
                        navigate("/")}}>BrainOp</Typography>

                </div>  
                <div>
                <Button variant="contained" sx={{mr:1}} onClick={() => {
                    navigate('/');
                }}>Home</Button>
                <Button variant="contained" sx={{mr:1}} onClick={() => {
                    navigate('/signin');
                }}>SignIn</Button>
                <Button variant="contained" sx={{mr:1}} onClick={() => {
                    navigate('/signup')}}>SignUp</Button>
                </div>
            </div>
        </div>
    )
}

   } 

   
export default AppbarAdmin; 
