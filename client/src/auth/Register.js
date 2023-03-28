import React, { useState } from "react";
import "../components/App.scss";
import { useNavigate } from "react-router-dom";

function App() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    console.log("Is it working?");
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    // const data = await response.json();
    // if (data.status === "ok") {
    //   history.push("/login");
    //   console.log("All good");
    //   window.location.href = "/profile";
    // }
    const data = await response.json();
    if (data.status === "ok") {
      // Log in the user in the background
      const loginResponse = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const loginData = await loginResponse.json();
      if (loginData.user) {
        // Store the token and navigate to the profile page
        localStorage.setItem("token", loginData.user);
        window.location.href = "/profile";
      } else {
        // Handle login error
        console.log("Error logging in after registration");
      }
    } else {
      const warningMsg = document.createElement("div");
      warningMsg.classList.add("warning-msg");
      warningMsg.innerHTML = `
    <i class="fa fa-warning"></i>
    Email is already registered
  `;
      document.querySelector(".register-container").appendChild(warningMsg);
      warningMsg.addEventListener("animationend", function () {
        this.remove();
      });
    }
  }

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <form onSubmit={registerUser} className="register-form">
          <h1>Register</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="register-input"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="register-input"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="register-input"
          />
          <div className="row flex-xl-nowrap">
            <input type="submit" value="Register" className="register-submit" />
            <div className="login-link">
              Have an account? <a href="/login">Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
