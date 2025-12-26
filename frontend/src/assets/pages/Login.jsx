return (
  <div className="container">
    <h2>TrendLens Login</h2>

    <input placeholder="Email" />
    <input type="password" placeholder="Password" />

    <select onChange={(e) => setRole(e.target.value)}>
      <option>Business</option>
      <option>Analyst</option>
      <option>Admin</option>
    </select>

    <button onClick={handleLogin}>Login</button>

    <p style={{ textAlign: "center", cursor: "pointer" }}
       onClick={() => navigate("/register")}>
      New user? Register
    </p>
  </div>
);
