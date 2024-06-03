import { Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
    // const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    return (<div>

        <div style={{display:"flex", justifyContent:"center", marginTop:200, marginBottom:100}}>
            <Card style={{padding:30}}>
            <div style={{textAlign:"center", color:"black", marginBottom:40}}>
            <Typography variant="h6">Signin</Typography>
        </div>
            <TextField
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            />
            <br /><br />
            <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            type="password"
            />
            <br /><br />
            <div style={{display:"flex", justifyContent:"center"}}>
            <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        const res = await axios.post(`https://brain-op-beta.vercel.app/user/login`, {
                            email: email,
                            password: password
                        }, {
                            headers: {
                                "Content-type": "application/json"
                            }
                        });
                        const data = res.data;

                        localStorage.setItem("token", data.token);
                        alert("user login successful");
                        navigate("/")
                        // window.location = "/posts"
                    
                    }}

                > Signin</Button>
            </div>

            </Card>
        </div>

        </div>
    )
}

export default UserLogin;