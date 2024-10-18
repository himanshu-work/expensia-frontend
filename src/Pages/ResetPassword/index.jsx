import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../api/authService";

export const ResetPassword = () => {
  const navigator = useNavigate();

  // here user came from his email link and we have the token in params
  const [searchParams, setSearchParams] = useSearchParams(); // receive the token

  // console.log("token recieved -> " + searchParams.get("token"));
  const token = searchParams.get("token");
  const [userData, setUserData] = useState({
    password: "",
    confirm_password: "",
  });
  function handleSubmit(e) {
    if (userData.password.length === 0) {
      alert("Enter Email");
    } else if (userData.confirm_password.length === 0) {
      alert("Enter Password");
    } else if (userData.password != userData.confirm_password) {
      alert("Password does not match");
    } else {
      e.preventDefault();
      resetPassword(token, userData.password)
        .then(() => {
          navigator("/signin");
          alert("Password was reset successfully");
        })
        .catch(() => {
          alert("Could not reset password");
        });
      setUserData({
        password: "",
        confirm_password: "",
      });
    }
  }
  return (
    <div className="sign">
      <form className="signCard" onSubmit={(e) => handleSubmit(e)}>
        {/* <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div> */}
        <h1 className="signtitle">Reset Password</h1>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Password
          </label>
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            placeholder="Enter password"
            required
            className="inputSign"
            id="password"
          />
        </div>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="password">
            Confirm password
          </label>
          <input
            value={userData.confirm_password}
            onChange={(e) =>
              setUserData({ ...userData, confirm_password: e.target.value })
            }
            type="password"
            placeholder="Confirm password"
            required
            className="inputSign"
            id="confirm_password"
          />
        </div>
        <button className="signBtn">Reset</button>
      </form>
      <div className="noAccount">
        <Link to="/signin">
          <div className="SignLink">Have an account? Signin now!</div>
        </Link>
      </div>
    </div>
  );
};
