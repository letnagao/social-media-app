import React from "react";
import PostSide from "../../components/post-side/PostSide";
import ProfileSide from "../../components/profile/ProfileSide";
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide />
            <PostSide />
            <div className="RightSide">Rightside</div>
        </div>
    )
}

export default Home;