import React, { useEffect, useState } from "react";

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
    axios
      .get(`http://localhost:3001/orders`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        //response.data.order_info = JSON.parse(response.data.order_info)
        for(let i = 0; i < response.data.length; ++i) {
          response.data[i].order_info = JSON.parse(response.data[i].order_info);
      }
        setorder(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="profilePageContainer">
      <div className="personImageColumn">
        <img
          src={require("../assets/PersonOutline.PNG")}
          alt="FoodImages"
          width="120rem"
        />
      </div>
      <div className="basicInfoColumn">
        {" "}
        <h3>Hello, {name}</h3>
        <h1>
          {" "}
          Full Name: {name} {last_name}{" "}
        </h1>
        <h1> Email: {username} </h1>
        <button
          className="changePSWDButon"
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
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {order.map((value, key) => {
              return (
                <tr key={key}>
                  <td> {value.id} </td>
                  <td> {value.createdAt.substring(0, 10)} </td>
                  <td> {value.price_total.substring(0,4)} </td>
                  <td>
                    {value.order_info.cartItems.map((foodtype, index) => {
                      return(
                      foodtype.name
                      )
                    })}
                 </td>
                  
                  {/*
           <td>
                  <button
                    type="button"
                    variant="light"
                    onClick={() => {
                      navigate(`/order/${order.id}`);
                    }}
                  >
                    Details
                  </button>
                </td>
                  */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="PhoImageColumn">
        <h1>The Most Un-Pho-Gettable Restaurant!</h1>
        <img
          src={require("../assets/FoodImages.PNG")}
          alt="FoodImages"
          width="340px"
        />
      </div>
    </div>
  );
}

export default Profile;
