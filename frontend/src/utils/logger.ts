/*
 * ===========================================================
 *  ファイル名 : logger.ts
 *  概要       : ログを出力するクラス
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-12-03
 * ===========================================================
 */
type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";

type LogContext = {
  userId?: string;
  username?: string;
  sessionId?: string;
};

class Logger {
  private startTime = performance.now();
  private env = import.meta.env.MODE ?? "development";

  /** ← ここが追加 */
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
    };
  }

  private async sendToBackend(payload: ReturnType<typeof this.format>) {
    try {
      await fetch("/api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {}
  }

  private output(
    level: LogLevel,
    consoleFn: (...args: any[]) => void,
    message: any[]
  ) {
    const payload = this.format(level, message);

    consoleFn(
      `[${payload.level}]`,
      `[+${payload.deltaMs}ms]`,
      `[${payload.timestamp}]`,
      payload.context,
      ...payload.message
    );

    this.sendToBackend(payload);
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