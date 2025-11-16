import { useState } from "react";
import { loginWithPassword } from "@/lib/auth/authService";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginWithPassword(username, password);
      console.log("ログイン成功:", data);

      if (data.role === "admin") {
        window.location.href = "/adminHome";
      } else if (data.role === "teacher") {
        window.location.href = "/teacherHome";
      } else {
        window.location.href = "/studentHome";
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
        <h1>ログインページです</h1>
        <form onSubmit={handleLogin}>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">ログイン</button>
        </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}