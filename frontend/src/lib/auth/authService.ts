/*
 * ===========================================================
 *  ファイル名 : authService.ts
 *  概要       : Login.tsxで必要な処理を提供する
 *  export    : loginWithPassword
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-12
 * ===========================================================
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// passwordログイン
export const loginWithPassword = async (username: string, password: string) => {
  const loginUrl = `${API_BASE_URL}/auth/signin`;

  const res = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "ログイン失敗");
  }

  return await res.json(); // token / role などが返る
};