import {Card, Button, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";


function AddPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    return <div style={{display: "flex", justifyContent: "center", minHeight: "80vh", justifyContent: "center", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20, marginTop: 30, height: "100%"}}>
                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        await axios.post(`https://brain-op-beta.vercel.app/user/posts`, {
                            title: title,
                                description: description,
                                image: image,
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("Added post!");
                        navigate("/posts")
                    
                    }}
                style={{margin:"2px"}}> Add Post</Button>
                <Button variant="contained" size={'large'} onClick={() => {navigate("/posts")}}>
                    Back
                </Button>
            </Card>
        </div>
    </div>
}

export default AddPost;