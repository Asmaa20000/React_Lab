
import React, { useState } from "react";
import { usersArr } from "../../assets/data/users.js";
import Usercard from "./Usercard.js";

const Userslist = () => {
  const [users, setUsers] = useState(usersArr);
  const [searchEmail, setSearchEmail] = useState("");

  const handleDeleteUser = (id) => {
    const updatedUsersArr = users.filter((user) => user.id !== id);
    setUsers(updatedUsersArr);
  };

  const handleSearchChange = (e) => {
    setSearchEmail(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <div >
      <h2 className="text-center mt-3" style={{color:"#72b043"}}>Users List</h2>
      <div className="mb-3">
        <input
          type="text"
          className=" form-control d-flex align-items-center mx-auto "
          style={{ maxWidth: "300px" }}
          placeholder="Search by email"
          value={searchEmail}
          onChange={handleSearchChange} // Added onChange handler
        />
      </div>
      <hr />
      <div className="container-fluid">
      <div className="row">
        {filteredUsers.map((user) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={user.id}>
            <Usercard userItem={user} deleteuser={handleDeleteUser} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Userslist;
