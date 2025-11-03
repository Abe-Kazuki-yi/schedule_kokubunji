import { useNavigate } from "react-router-dom";

function GetTest() {
const navigate = useNavigate();
  return (
    <div>
      <h1>GetTestページです</h1>
      <button onClick={() => navigate("/")}>homeへ移動</button>
    </div>
  )
}

export default GetTest;