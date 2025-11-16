import { Routes, Route } from "react-router-dom";
import GetTest from "../page/GetTest";
import LoginPage from "@/page/LoginPage";
import RegisterPage from "@/page/RegisterPage";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default RouterConfig;