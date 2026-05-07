import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";
import manabu_logo from "../assets/img/unnamed.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // await new Promise((r) => setTimeout(r, 600));

    const result = login(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }

    setLoading(false);
  }

  return (
    <div className="login-bg">
      <div className="login-card">
        <img src={manabu_logo} alt="Manabu Logo" className="login-logo" />
        <h1 className="login-title">Welcome back!</h1>
        <p className="login-subtitle">Log in to continue learning kanji</p>


        <div className="login-hint">
          <span> Demo login:</span>
          <br />
          <strong>student@manabu.com</strong> / <strong>kanji123</strong>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in…" : "Log In →"}
          </button>
        </form>
      </div>
    </div>
  );
}
