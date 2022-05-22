import React from "react";
import PostShare from "../post-share/PostShare";
import Posts from "../posts/Posts";

import './PostSide.css'

const PostSide = () => {
    return (
        <div className="PostSide">
            <PostShare />
            <Posts />
        </div>
    )
}

export default PostSide;