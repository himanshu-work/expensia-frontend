import React, { useState } from "react";
import Expensia from "../../assets/images/expensia.png";
import { Link, useNavigate } from "react-router-dom";
import { registerAPICall } from "../../api/authService";
function SignUp() {
  const navigator = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  //handle email or username already exists alert

  function register() {
    registerAPICall(userData)
      .then(() => {
        // console.log(response.data);
        navigator("/signin");
      })
      .catch((error) => {
        console.log("error is " + error);
        alert("Username or Email is already used");
      });
  }

  function handleSubmit() {
    if (userData.email.length === 0) {
      alert("Enter Email");
    } else if (userData.password.length === 0) {
      alert("Enter Password");
    } else {
      register();
      setUserData({
        email: "",
        password: "",
        username: "",
      });
    }
  }
  return (
    <div className="sign">
      <div className="signCard">
        <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div>
        <h1 className="signtitle">Sign Up</h1>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Full Name
          </label>
          <input
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            type="text"
            placeholder="Enter Full Name"
            required
            className="inputSign"
            id="fullName"
          />
        </div>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Email
          </label>
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
            required
            className="inputSign"
            id="email"
          />
        </div>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Username
          </label>
          <input
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            type="text"
            placeholder="Enter username"
            required
            className="inputSign"
            id="username"
          />
        </div>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="password">
            Password
          </label>
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            placeholder="Create a password"
            required
            className="inputSign"
            id="password"
          />
        </div>
        <button className="signBtn" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>

      <div className="noAccount">
        <Link to="/signin">
          <div className="SignLink">Already have an account? Login now!</div>
        </Link>
      </div>
      <div className="noAccount floatLink  cursor-pointer">
        <Link to="/signin">
          <div className="SignLink text-white">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
