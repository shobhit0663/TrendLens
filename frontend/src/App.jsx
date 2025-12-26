import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AnalystDashboard from "./pages/AnalystDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/analyst" element={<AnalystDashboard />} />
        <Route path="/business" element={<BusinessDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
