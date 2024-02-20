import "./style.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";

function Login({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);

  const notify = () =>
    toast.warn("Oops Needs atleast 8 characters!", {
      position: "top-center",
      autoClose: 13,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const Loginuser = (e) => {
    e.preventDefault();

    if (password.length < minLength) {
      notify();
    }

    const adminData = {
      email: username,
      password: password,
    };

    // check if admin is logged in and log in auutomatically

    axios
      .post("http://localhost:2000/admin/signin", adminData)
      .then((res) => {
        console.log(res.data);
        const { token } = res.data;
        // setUserToken(token);
        setStoredToken(Cookies.set("userToken", token));
        // console.log(userToken);
      })
      .catch((err) => console.log(err));
  };

  let minLength = 8;

  const inputStyle = {
    padding: "5px",
    margin: "5px",
    border: touched && password.length < minLength ? "1px solid red" : "none",
  };

  return (
    <div className="loginpage">
      <div className="container login_container">
        <h1 className="Login_heading">Login Admin</h1>
        <div className="fields_login_admin">
          <label htmlFor="username">Name</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter admin username"
          />
        </div>
        <div className="fields_login_admin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setTouched(true);
            }}
            type="password"
            name="password"
            placeholder="Enter admin password"
            style={inputStyle}
          />
        </div>
        <button onClick={Loginuser}>Login</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
