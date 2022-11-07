import React from "react";


const EditProfileComponentList = (
    {
        profile
    }
) => {

    return (<div>
            <h3>Edit profile</h3>
            <div className="mt-2 pt-0 pb-5 position-realtive ">
                <div className="h4">{profile.firstName} {profile.lastName} </div>
                <div className="h10 text-muted">{profile.nooftuits} Tuits</div>
                <img  alt="" className="pt-2 border-secondary rounded" src={`/images/${profile.bannerimage}`} height = {300} width={650}/>

                <div className=" pt-4 ps-4   position-absolute top-50 h-100 ">
                    <img   alt="profile" className="float-left float-start  rounded-circle" src={`/images/${profile.profilepic}`} height ={100} width={100} />
                </div>

            </div>


            <div className="pt-2">
                <div className="fw-bold">{profile.firstName} {profile.lastName}
                    <span className="ps-3 "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-patch-check-fill" color="blue"
                                                 viewBox="0 0 16 16">
                            <path
                                d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg></span>
                    <div className=" fw-bold">{profile.userName}
                        <div className="text-muted"> {profile.handle} </div> </div> </div>
                <div className="pt-3">{profile.bio}</div>
                <div className="text-muted">{profile.website}</div>
                <div className="text-muted pt-1 "><i className="bi bi-geo-alt text-secondary pe-2"/> {profile.location}      <span className="text-muted p-5"><i className="bi bi-balloon text-secondary pe-2"/> {profile.dob}</span>  <span className="text-muted"> <i className="bi bi-calendar3 text-secondary pe-2"/> {profile.dateJoined}</span>   </div>
                <div className=" fw-bold pt-1 pl-2"> {profile.followers}   <span className="text-muted">Following</span>  <span className=" fw-bold p-5 p-2"> {profile.following}<span className="text-muted ">  Followers</span> </span>

                </div>
            </div>

        </div>
    );
};
export default EditProfileComponentList;