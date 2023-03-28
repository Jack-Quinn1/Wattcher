import React, { useState } from "react";
import "../components/App.scss";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      const successMsg = document.createElement("div");
      successMsg.classList.add("success-msg");
      successMsg.innerHTML = `
    <i class="fa fa-success"></i>
    Login Success
  `;
      document.querySelector(".login-container").appendChild(successMsg);
      successMsg.addEventListener("animationend", function () {
        this.remove();
      });
      window.location.href = "/dashboard";
    } else {
      const warningMsg = document.createElement("div");
      warningMsg.classList.add("warning-msg");
      warningMsg.innerHTML = `
    <i class="fa fa-warning"></i>
    Please check your username and password
  `;
      document.querySelector(".login-container").appendChild(warningMsg);
      warningMsg.addEventListener("animationend", function () {
        this.remove();
      });
    }
  }

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <form onSubmit={loginUser} className="login-form">
          <h1>Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="login-input"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <div className="row flex-xl-nowrap">
            <input type="submit" value="Login" className="login-submit" />
            <div className="signup-link">
              Don't have an account? <a href="/register">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
