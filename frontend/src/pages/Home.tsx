import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>テストページです</h1>
      <button onClick={() => navigate("/getTest")}>getTestへ移動</button>
    </div>
  );
}

export default Home;
