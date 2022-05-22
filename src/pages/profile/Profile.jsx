import React from "react";
import PostSide from "../../components/post-side/PostSide";
import ProfileCard from "../../components/profile-card/ProfileCard";
import ProfileLeft from "../../components/profile-left/ProfileLeft";
import './Profile.css';

const Profile = () => {
    return (
        <div className="Profile">
            <ProfileLeft />
            <div className="Profile-center">
                <ProfileCard />
                <PostSide />
            </div>
        </div>
    )
}

export default Profile;