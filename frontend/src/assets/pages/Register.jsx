import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px" }}>
      <h2>User Registration</h2>

      <input placeholder="Full Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />

      <select>
        <option>Business</option>
        <option>Analyst</option>
      </select><br /><br />

      <button onClick={() => navigate("/")}>Register</button>
    </div>
  );
}

export default Register;
