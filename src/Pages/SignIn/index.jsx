import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, loginAPICall } from "../../api/authService";
import Expensia from "../../assets/images/expensia.png";
import { BeatLoader } from "react-spinners";
import TooltipEx from "../../components/core/Tooltip";

function SignIn() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const cssOverride = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };
  const [isTestUserSignIn, setIsTestUserSignIn] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();

  function handleTestSignIn() {
    setUserData({
      email: "TesterExpensia777@gmail.com",
      password: "TestExpensia777",
    });
    setIsTestUserSignIn(true);
  }

  async function handleSubmit(e, withForm = false) {
    e.preventDefault();
    if (withForm) e.preventDefault();

    if (userData.email.length === 0) {
      alert("Enter correct Username Or Email");
      setLoading(false);
    } else if (userData.password.length === 0) {
      alert("Enter Password");
      setLoading(false);
    } else if (loading === false) {
      //to be handled later
      //trim the userdata extra space after the username or email
      setUserData({
        ...userData,
        email: userData.email.trim(),
      });
      try {
        setLoading(true);
        await loginAPICall(userData);
        setLoading(false);
        navigator("/dashboard");
      } catch (error) {
        alert("Enter Valid Credentials");
        setLoading(false);

      }
      setUserData({
        email: "",
        password: "",
      });
    }
  }
  useEffect(() => {
    if (isTestUserSignIn == true) {
      handleSubmit(null, false);
    }
  }, [isTestUserSignIn]);
  return (
    <div className="sign">
      <form className="signCard" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div>
        <h1 className="signtitle">Login to Expensia</h1>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Username or Email
          </label>
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="text"
            placeholder="Enter Username or Email"
            required
            className="inputSign"
            id="email"
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
            placeholder="Enter password"
            required
            className="inputSign"
            id="password"
          />
        </div>
        <button className="signBtn">
          {loading ? (
            <BeatLoader
              color={color}
              loading={loading}
              cssOverride={cssOverride}
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <span>Login</span>
          )}
        </button>
        <Link to="/forgotpassword">
          <div className="SignLink">Forgot password?</div>
        </Link>

        <p className="cursor-pointer"></p>
      </form>
      <div className="noAccount">
        <Link to="/signup">
          <div className="SignLink">Don't have an account? Signup now!</div>
        </Link>
      </div>
      {!loading ? (
        <>
          <p
            className="absolute bottom-32 right-5 bg-white cursor-pointer select-none text-neutral-500 px-5 py-2 rounded-xl"
            onClick={() => {
              handleTestSignIn();
            }}
          >
            Click here to login as a <b>Test</b> User
          </p>

          <div
            className="absolute cursor-pointer  bottom-5 right-5"
            onClick={() => {
              handleTestSignIn();
            }}
          >
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium-Light%20Skin%20Tone.png"
              alt="Man Technologist Medium-Light Skin Tone"
              width="100"
              height="100"
            />
          </div>
        </>
      ) : null}

      {loading ? (
        <div className="absolute top-1/2 -translate-y-1/2 left-[10%] flex-col items-center justify-center">
          <p className=" bg-white cursor-pointer select-none text-neutral-500 px-5 py-2 rounded-xl w-48 text-center mr-auto">
            <b>NOTE: </b>It might seem website is slow. It is because backend is
            deployed on free service.
          </p>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Hot%20Beverage.png"
            alt="Hot Beverage"
            width="100"
            height="100"
          />
        </div>
      ) : null}
    </div>
  );
}

export default SignIn;
