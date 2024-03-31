import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import EmployeeList from "./components/EmployeeList";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwt")) navigate("/employeelist");
    else navigate("/login");
  });
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/employeelist" element={<EmployeeList />} />
    </Routes>
  );
};

export default App;
