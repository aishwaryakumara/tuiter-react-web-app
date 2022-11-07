import React from "react";
import ProfileComponentList from "./profile-component-list";
import profileArray from "./profiles.json"

const ProfileComponent = () => {
    return (
        <div className="list-group">
            {
                profileArray.map((profile,_id) =>
                                  <ProfileComponentList
                                      key={profile._id} profile={profile}/>
                )
            }
        </div>
    );
};
export default ProfileComponent;