import { Button, Card, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return <div>
    <Grid container style={{padding: "5vw"}}>
        <Grid item xs={12} md={6} lg={6}>
            <div style={{marginTop: 20, marginRight: 10}}>
                <Typography variant={"h2"}>
                    Student Counselling App
                </Typography>
                <p className="mt-4">
                Welcome to [App Name]
Your Mental Wellness Journey Starts Here

Empowering Students, One Conversation at a Time
At [App Name], we believe that every student deserves support and guidance on their mental health journey. 
Our platform connects you with trained counselors and resources tailored to your needs, helping you thrive academically and personally.

                    Key Features
Confidential Counseling: Speak with licensed professionals in a safe and secure environment.

24/7 Support: Access help whenever you need it, day or night.

Resource Library: Explore articles, videos, and tools designed to enhance your well-being.

Community Forum: Join a supportive community where you can share experiences and connect with peers.

Personalized Plans: Get customized strategies and tips that fit your unique situation.
                </p>
                {/* {<div style={{display: "flex", marginTop: 20}}>
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
                </div>} */}
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
