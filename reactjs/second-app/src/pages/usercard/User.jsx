import React from "react";
import UserCard from "../../components/usercard/UserCard";
import "./User.css"

const Users=()=>{
    return(
        
        <div id="users">
       
            <UserCard
            name="prasad surase"
            mobNumber="+19067642211"
            email="prasad@maxotag.com"
            addr="planet 78, near Parle Way-2324,Andromeda Galaxy"
            />
       
            <UserCard
            name="dipak ohol"
            mobNumber="+79065642211"
            email="dipak@maxotag.com"
            addr="14th street , ganesh road pune"
            />
        
            <UserCard
            name="Kiran"
            mobNumber="+86067642211"
            email="kiran@maxotag.com"
            addr="planet earth, pune ,india"
            />
        
        </div>
        
    );
};
export default Users;