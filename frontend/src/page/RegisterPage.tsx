import { useState } from "react";
import { register } from "@/lib/auth/authService";

import BeforLoginLayout from "@/layout/BeforeLoginLayout";
/*
 * ===========================================================
 *  ファイル名 : RegisterPage.tsx
 *  概要       : 新規登録をするPage
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-15
 * ===========================================================
 */

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const data = await register(username, password, role);
      console.log("登録成功:", data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <BeforLoginLayout>
      <h1>新規登録</h1>
      <form onSubmit={handleRegister}>
            <label>
              ユーザネーム
              <input value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
              パスワード：
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <label>
              権限：
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">管理者</option>
                <option value="teacher">教師</option>
                <option value="student">学生</option>
              </select>
            </label>
            <button type="submit">新規登録</button>
        </form>
        </BeforLoginLayout>
    </div>
  );
}