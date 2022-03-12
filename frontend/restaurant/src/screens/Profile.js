import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
function Profile() {
  
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setname] = useState("");
  const [last_name, setLast_name] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/basicinfo`, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setUsername(response.data.username);
        setname(response.data.name);
        setLast_name(response.data.last_name);
      });
  }, []);

  return (
    <div className="profilePageContainer">
      <div className="basicInfo">
        {" "}
        <h1> Email: {username} </h1>
        <h1> Name: {name} </h1>
        <h1> Last Name: {last_name} </h1>
        <button
          onClick={() => {
            navigate("/changepassword");
          }}
        >
          {" "}
          Change My Password
        </button>
      </div>
      <div className="order-history-container"> 
          <h1>Order History</h1>
      </div>
      <div className="point-container"> 
          <h1></h1>
      </div>
    </div>
  );
}

export default Profile;
