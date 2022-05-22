import React from "react";
import FollowersCard from "../followers-card/FollowersCard";
import InfoCard from "../info-card/InfoCard";
import LogoSearch from "../logo-search/LogoSearch";

const ProfileLeft = () => {
    return (
     <div className="ProfileSide">
         <LogoSearch/>
         <InfoCard/>
         <FollowersCard/>
     </div>
    )
  }
  
  export default ProfileLeft