import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Profile() {
  
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setname] = useState("");
  const [last_name, setLast_name] = useState("");
  const [order, setorder] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/basicinfo`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setUsername(response.data.username);
        setname(response.data.name);
        setLast_name(response.data.last_name);
      });
      axios.get(`http://localhost:3001/orders`).then((response) => {
      setorder(response.data);
      console.log(response.data)
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
          <h2>Order History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Date</th>
          </tr>
        </thead>
      </table>
        {order.map((value,key) =>{
          return <div> 
           <td> {value.id} </td>
           <td> {value.price_total} </td>
           <td> {value.paid} </td>
           <td> {value.createdAt.substring(0,10)} </td>
           </div>
        })}
     
      </div>
      <div className="PhoImageColumn"> 
        <h1>The Most Un-Pho-Gettable Restaurant!</h1>
        <img src={require('../assets/FoodImages.PNG')} alt="FoodImages" width="340px" />
      </div>
      
    </div>
  );
}

export default Profile;
