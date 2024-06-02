import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);

    const init = async () => {
        const response = await axios.get(`http://localhost:3000/user/posts/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setPosts(response.data.posts)
    }

    useEffect(() => {
        init();
    }, []);

    return(
        <div className="m-2">
            <h1 className="text-center text-2xl">Welcome to BrainOp</h1>
 <div className="flex flex-wrap justify-evenly m-1">
        {posts.map(post => {
            return <Post post={post} />}
        )}
    </div>
        </div>
       )
}

export function Post({post}) {
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{post.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{post.description}</Typography>
        <img src={post.image} style={{width: 300}} ></img>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={() => {
                navigate("/post/" + post._id);
            }}>Open</Button>
        </div>
    </Card>

}

export default Posts;