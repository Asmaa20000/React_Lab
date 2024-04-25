import React from "react";
import imgVerfiy from './../../imgs/starNotverified.webp'
import imgNotVerify from './../../imgs/starVerified.webp'

export default function Usercard(props) {
  console.log(props);
  const { userItem, deleteuser } = props;
  return (
    <div className="container">
    <div class="card h-100 ">
      <img src={userItem.image} class="card-img-top" alt="..." />
      <div class="card-body">
        {userItem.is_verified ? (
         
          <img src={imgVerfiy} className="w-5 float-end" style={{ maxWidth: "30px" }} alt="..." />

        ) : (
          <img src={imgNotVerify} className="w-5 float-end"style={{ maxWidth: "30px" }} alt="..." />
        )}
        <h5 style={{color:"#72b043"}} class="card-title">Username:{userItem.username}</h5>
        <p  class="card-text"> Email: {userItem.email}</p>
        <p  class="card-text">Phone :{userItem.phone}</p>
        <button className="btn btn-danger" onClick={() => deleteuser(userItem.id)}>Delete user</button>
      </div>
    </div>
    </div>
  );
}
