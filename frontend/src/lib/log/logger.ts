/*
 * ===========================================================
 *  ファイル名 : logger.ts
 *  概要       : フロントエンド用ロガー
 *               - traceId による操作単位ログ追跡
 *               - console 出力 + backend 送信
 *               - API リクエストと traceId を完全同期
 *               - exactOptionalPropertyTypes 対応
 * ===========================================================
 */

import { BASE_URL, ENDPOINTS } from "@/config/api";

/* =========================
 *  型定義
 * ========================= */

export type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";

export type LogContext = {
  traceId?: string;
  userId?: number;
  role?: "admin" | "teacher" | "student";
  screen?: string;
};

type LogPayload = {
  level: LogLevel;
  timestamp: string;
  deltaMs: string;
  message: any[];
  context: LogContext;
  env: string;
  traceId?: string; // exactOptionalPropertyTypes 対応
};

/* =========================
 *  Logger 実装
 * ========================= */

class Logger {
  /** trace 単位の開始時刻 */
  private startTime = performance.now();

  /** 実行環境 */
  private readonly env = import.meta.env.MODE ?? "development";

  /** 共通コンテキスト */
  private context: LogContext = {};

  /* =========================
   *  Trace / Context 管理
   * ========================= */

  /** 新しい操作単位の開始（画面表示・ボタン押下など） */
  startTrace(traceId?: string) {
    this.context.traceId = traceId ?? crypto.randomUUID();
    this.startTime = performance.now();
  }

  /** traceId 取得（API 呼び出し用） */
  getTraceId(): string | undefined {
    return this.context.traceId;
  }

  /** コンテキスト追加 */
  setContext(ctx: Partial<LogContext>) {
    this.context = { ...this.context, ...ctx };
  }

  /** ログアウト時など */
  clearContext() {
    this.context = {};
  }

  /* =========================
   *  内部処理
   * ========================= */

  private format(level: LogLevel, message: any[]): LogPayload {
    const payload: LogPayload = {
      level,
      timestamp: this.getJstTimestamp(),
      deltaMs: (performance.now() - this.startTime).toFixed(1),
      message,
      context: this.context,
      env: this.env,
    };

    if (this.context.traceId) {
      payload.traceId = this.context.traceId;
    }

    return payload;
  }

  private async sendToBackend(payload: LogPayload) {
    // 本番では WARN / ERROR のみ送信
    if (
      this.env === "production" &&
      payload.level !== "WARN" &&
      payload.level !== "ERROR"
    ) {
      return;
    }

    try {
      await fetch(`${BASE_URL}${ENDPOINTS.logs}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(payload.traceId && { "X-Trace-Id": payload.traceId }),
        },
        body: JSON.stringify(payload),
        keepalive: true, // ページ遷移時も送信
      });
    } catch (e) {
      // ログ失敗でアプリを止めない（設計的に正解）
      if (this.env !== "production") {
        console.warn("log send failed", e);
      }
    }
  }

  private output(
    level: LogLevel,
    consoleFn: (...args: any[]) => void,
    message: any[]
  ) {
    const payload = this.format(level, message);

    // console 出力（開発用）
    if (this.env !== "production") {
      consoleFn(
        `[${payload.level}]`,
        `[+${payload.deltaMs}ms]`,
        `[${payload.timestamp}]`,
        payload.context,
        ...payload.message
      );
    }

    // backend 送信（非同期）
    this.sendToBackend(payload);
  }

  /* =========================
   *  Public API
   * ========================= */

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

  /* =========================
   *  Util
   * ========================= */

  /** JST ISO 文字列 */
  private getJstTimestamp(): string {
    const now = new Date();
    const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    return jst.toISOString().replace("Z", "+09:00");
  }
}

/* =========================
 *  シングルトン
 * ========================= */

export const logger = new Logger();
