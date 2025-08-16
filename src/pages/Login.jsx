import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const res = login(email.trim(), password);
    if (res.ok) {
      navigate("/", { replace: true });
    } else {
      setError(res.message || "Login failed");
    }
  }

  return (
    <div className="login-wrap">
      <form className="card" onSubmit={handleSubmit}>
        <h1 className="card-title">Sign in</h1>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label className="field">
          <span>Password</span>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        {error && <div className="error">{error}</div>}

        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}
