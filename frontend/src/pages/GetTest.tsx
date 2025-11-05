import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, ENDPOINTS } from "../config/api";

function GetTest() {
const navigate = useNavigate();
const [response, setResponse] = useState<string>("");
const apiFetch = (endpoint: string) => fetch(`${BASE_URL}${endpoint}`);

const handleClick = async () => {
  const res = await apiFetch(ENDPOINTS.students);
  const data = await res.text();
  setResponse(data);
};

  return (
    <div>
      <h1>GetTestページです</h1>
      <button onClick={handleClick}>test</button>
      <p>ここにテキストを表示:{response ? response : "まだ取得していません"}</p>
      <button onClick={() => navigate("/")}>homeへ移動</button>
    </div>
  )
}

export default GetTest;