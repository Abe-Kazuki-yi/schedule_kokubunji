import { useState, useEffect } from "react";
import { loginWithPassword } from "@/lib/auth/authService";
import BeforLoginLayout from "@/layout/BeforeLoginLayout";
import { logger } from "@/lib/log/logger";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    logger.setContext({ screen: "LoginPage" });
    logger.trace("LoginPage mounted");
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    logger.startTrace();
    console.log("TRACE_ID (after startTrace):", logger.getTraceId());
    logger.trace("LoginPage.tsx: login attempt");

    try {
      const data = await loginWithPassword(username, password);

      logger.setContext({
        userId: data.userId,
        role: data.role,
        screen: "LoginPage",
      });

      logger.info("LoginPage.tsx: login success");

      if (data.role === "admin") {
        navigate("/adminHome");
      } else if (data.role === "teacher") {
        navigate("/teacherHome");
      } else {
        navigate("/studentHome");
      }
    } catch (err: any) {
      setError(err.message);
      logger.error("LoginPage.tsx: login failed", {
        reason: err.message,
      });
    }
  };

  return (
    <BeforLoginLayout>
      <h1>ログインページです</h1>
      <form onSubmit={handleLogin}>
        <label>
          ユーザー名
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          パスワード
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "非表示" : "表示"}
        </button>
        <br />
        <button type="submit">ログイン</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </BeforLoginLayout>
  );
}
