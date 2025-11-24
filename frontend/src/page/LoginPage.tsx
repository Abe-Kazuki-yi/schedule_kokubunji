import { useState } from "react";
import { loginWithPassword } from "@/lib/auth/authService";

import BeforLoginLayout from "@/layout/BeforeLoginLayout";
/*
 * ===========================================================
 *  ファイル名 : LoginPage.tsx
 *  概要       : ログインページ
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-22
 * ===========================================================
 */


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <BeforLoginLayout>
        <h1>ログインページです</h1>
        <form onSubmit={handleLogin}>
          <label>ユーザー名<input value={username} onChange={e => setUsername(e.target.value)} /></label>
          <br/>
          <label>パスワード<input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} /></label>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "非表示" : "表示"}</button>
          <br/>
          <button type="submit">ログイン</button>
        </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      </BeforLoginLayout>
    </div>
  );
}