import React, { useState } from "react";
import axios from "axios";

function displayMessage() {
    alert("Your password has been changed.");
}

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = () => {
    axios
      .put(
        "http://localhost:3001/auth/changepassword",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        }
      });
      displayMessage();
  };

  return (
    <div className="main-content">
      <h3>Change Your Password</h3>
      <h1>You can change your password for security reasons or reset it if you forget it. Your Pho Ru Account password is used to access your order history.</h1>
      <div className="inputChangePSWD">
        <input
          type="text"
          placeholder="Enter Old Password"
          onChange={(event) => {
            setOldPassword(event.target.value);
          }}
        /><br/>
        <input
          type="text"
          placeholder="Enter New Password"
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
        /><br/>
      </div>
      <button className="saveChangesButton" onClick={changePassword}>Save Changes</button>
    </div>
  );
}

export default ChangePassword;