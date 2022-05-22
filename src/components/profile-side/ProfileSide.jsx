import React from "react";
import FollowersCard from "../followers-card/FollowersCard";
import LogoSearch from "../logo-search/LogoSearch";
import ProfileCard from "../profile-card/ProfileCard";

import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide