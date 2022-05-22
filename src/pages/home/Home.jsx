import React from "react";
import PostSide from "../../components/post-side/PostSide";
import ProfileSide from "../../components/profile/ProfileSide";
import RightSide from "../../components/right-side/RightSide";
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}

export default Home;