import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GetTest from "../pages/GetTest";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/getTest" element={<GetTest />} />
    </Routes>
  );
}

export default RouterConfig;
