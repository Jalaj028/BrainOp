import { Button, Card, IconButton, Typography } from "@mui/material";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

function AppbarAdmin() {
   const navigate = useNavigate();
    const[email, setEmail] = useState(null);
   

   useEffect(() => {

    function callback2(data) {
        
       if(data.email){
        setEmail(data.email);
       }
       
        console.log(data);
    }

    function callback1(res) {
        res.json().then(callback2);
    }

   

     fetch("http://localhost:3000/user/me", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " +  localStorage.getItem("token")
        }
     }).then(callback1)
   }, [])

   
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
                    <h1 className="text-center text-2xl cursor-pointer" onClick={() => {
                        navigate("/")
                    }}>BrainOp</h1>
                </div>  
                <div>
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
