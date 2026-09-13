import React, { useState } from "react";

export default function Login({ onLogin, onNavigate }) {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onLogin(identity)) {
      setErr("User not found. Try siya_dev, ruchika_ui, or prachi_coder.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20 }}>
      <div className="card" style={{ maxWidth: 380, width: "100%", padding: 32 }}>
        <h1 style={{ color: "var(--primary)", fontSize: 26, fontWeight: 800, textAlign: "center", marginBottom: 6 }}>
          SkillSphere
        </h1>
        <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 13, marginBottom: 24 }}>
          Student Tech & Skill Community
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username, Email, or ID</label>
            <input
              required
              placeholder="Enter Username"
              value={identity}
              onChange={(e) => { setIdentity(e.target.value); setErr(""); }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {err && <div style={{ color: "var(--like)", fontSize: 12, marginBottom: 12 }}>{err}</div>}
          <button type="submit" className="btn" style={{ width: "100%", marginTop: 6 }}>
            Log In →
          </button>
        </form>

        <div style={{ textAlign: "center", fontSize: 13, color: "var(--muted)", marginTop: 20 }}>
          New here?{" "} 
          <button onClick={() => onNavigate("signup")} style={{ color: "var(--primary)", fontWeight: 700 }}>
            Create an account
          </button>
        </div>
      </div> 
    </div>  
  );
}