/*
 * ===========================================================
 *  ファイル名 : logger.ts
 *  概要       : ログを出力するクラス
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-12-03
 * ===========================================================
 */

import { BASE_URL, ENDPOINTS } from "@/config/api"; // ← パスは環境に合わせて調整

type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";

type LogContext = {
  userId?: string;
  username?: string;
  sessionId?: string;
};

class Logger {
  private startTime = performance.now();
  private env = import.meta.env.MODE ?? "development";

  private context: LogContext = {};

  /** ログに付与する共通情報を設定 */
  setContext(ctx: LogContext) {
    this.context = { ...this.context, ...ctx };
  }

  /** ログアウト時など */
  clearContext() {
    this.context = {};
  }

  private format(level: LogLevel, message: any[]) {
    return {
      level,
      timestamp: new Date().toISOString(),
      deltaMs: (performance.now() - this.startTime).toFixed(1),
      message,
      context: this.context,
      env: this.env,
    };
  }

  /** backend にログ送信 */
  private async sendToBackend(payload: ReturnType<typeof this.format>) {
    try {
      await fetch(`${BASE_URL}${ENDPOINTS.logs}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // ログ送信失敗でアプリを止めない
      console.warn("failed to send frontend log", e);
    }
  }

  private output(
    level: LogLevel,
    consoleFn: (...args: any[]) => void,
    message: any[]
  ) {
    const payload = this.format(level, message);

    // console 出力（dev 用）
    consoleFn(
      `[${payload.level}]`,
      `[+${payload.deltaMs}ms]`,
      `[${payload.timestamp}]`,
      payload.context,
      ...payload.message
    );

    // backend 送信（非同期）
    this.sendToBackend(payload);
  }

  trace(...message: any[]) {
    this.output("TRACE", console.debug, message);
  }

  debug(...message: any[]) {
    this.output("DEBUG", console.debug, message);
  }

  info(...message: any[]) {
    this.output("INFO", console.info, message);
  }

  warn(...message: any[]) {
    this.output("WARN", console.warn, message);
  }

  error(...message: any[]) {
    this.output("ERROR", console.error, message);
  }
}

export const logger = new Logger();
