import { Button, Card, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return <div>
    <Grid container style={{padding: "5vw"}}>
        <Grid item xs={12} md={6} lg={6}>
            <div style={{marginTop: 100}}>
                <Typography variant={"h2"}>
                    BrainOp
                </Typography>
                <p>
                At BrainOp Technologies, we're building Mapmox, an analytics platform where HRs and
                hiring managers can make informed decisions while hiring a candidate. The platform 
                helps with 2 core problems in people management, including decreasing the time to 
                hire a person and helping narrow down the best candidate by helping hiring 
                managers predict the best-fit candidate for the role.
                </p>
                {<div style={{display: "flex", marginTop: 20}}>
                    <div style={{marginRight: 10}}>
                        <Button
                            size={"large"}
                            variant={"contained"}
                            onClick={() => {
                                navigate("/signup")
                            }}
                        >Signup</Button>
                    </div>
                    <div>
                        <Button
                            size={"large"}
                            variant={"contained"}
                            onClick={() => {
                                navigate("/signin")
                            }}
                        >Signin</Button>
                    </div>
                </div>}
            </div>
            <div>
            </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
            <img src={"/class.jpg"} width={"100%"} />
        </Grid>
    </Grid>
</div>


}

export default Home;