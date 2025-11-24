import { Routes, Route } from "react-router-dom";
import LoginPage from "@/page/LoginPage";
import RegisterPage from "@/page/RegisterPage";
import AdminHome from "@/page/home/AdminHome";
import StudentHome from "@/page/home/StudentHome";
import TeacherHome from "@/page/home/TeacherHome";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/studentHome" element={<StudentHome />} />
      <Route path="/teacherHome" element={<TeacherHome />} />
    </Routes>
  );
}

export default RouterConfig;