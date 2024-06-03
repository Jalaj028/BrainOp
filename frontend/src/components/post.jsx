import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";

function Post() {
    let { postId } = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        axios.get("http://localhost:3000/user/post/" + postId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setPost(res.data.post);
        });
    }, []);

    if (!post) {
        return <div style={{height: "100vh", justifyContent: "center", flexDirection: "column"}}>
            Loading....
        </div>
    }

    return <div>
        <GrayTopper title={post.title}/>
                <PostCard post={post} />
    </div>
}

function GrayTopper({title}) {
    return <div style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250}}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>
                    {title}
                </Typography>
            </div>
        </div>
    </div>
}


function PostCard(props) {
    const navigate = useNavigate();
    const post = props.post;
    return <div style={{display: "flex",  marginTop: 50, justifyContent: "center", width: "100%"}}>
     <Card style={{
        margin: 10,
        width: 350,
        minHeight: 200,
        borderRadius: 20,
        marginRight: 50,
        paddingBottom: 15,
        zIndex: 2
    }}>
        <img src={post.image} style={{width: 350}} ></img>
        <div style={{marginLeft: 10}}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="subtitle1">
                <b>{post.description} </b>
            </Typography>
            <Button variant="contained" onClick={() => {
                navigate("/posts")
            }}>Back</Button>
        </div>
    </Card>
    </div>
}

export default Post;