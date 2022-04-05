import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
      <div className='personImageColumn'>
        <img src={require('../assets/PersonOutline.PNG')} alt="FoodImages" width="120rem"/>
      </div>
      <div className="basicInfoColumn">    
        {" "}
        <h3>Hello, {name}</h3>
        <h1> Full Name: {name} {last_name} </h1>
        <h1> Email: {username} </h1>
        <button className="changePSWDButon"
          onClick={() => {
            navigate("/changepassword");
          }}
        >
          {" "}
          Change My Password
        </button>
      </div>
      <div className="OrderHistoryColumn"> 
          <h1>My Order History</h1>
      </div>
      <div className="PhoImageColumn"> 
        <h1>The Most Un-Pho-Gettable Restaurant!</h1>
        <img src={require('../assets/FoodImages.PNG')} alt="FoodImages" width="340px" />
      </div>
      
    </div>
  );
}

export default Profile;
