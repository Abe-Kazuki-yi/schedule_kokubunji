/*
 * ===========================================================
 *  ファイル名 : logger.ts
 *  概要       : ログを出力するクラス
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-12-03
 * ===========================================================
 */
class Logger {
    private startTime = performance.now();
    private env = import.meta.env.MODE ?? process.env.NODE_ENV ?? "development";
  
    private format(level: string, message: any[]) {
      const delta = (performance.now() - this.startTime).toFixed(1);
      const timestamp = new Date().toISOString();
      return [`[${level}]`, `[+${delta}ms]`, `[${timestamp}]`, ...message];
    }
  
    trace(...message: any[]) {
      if (this.env !== "production") {
        console.debug(...this.format("TRACE", message));
      }
    }
  
    debug(...message: any[]) {
      if (this.env !== "production") {
        console.debug(...this.format("DEBUG", message));
      }
    }
  
    info(...message: any[]) {
      console.info(...this.format("INFO", message));
    }
  
    warn(...message: any[]) {
      console.warn(...this.format("WARN", message));
    }
  
    error(...message: any[]) {
      console.error(...this.format("ERROR", message));
    }
  }
  
  export const logger = new Logger();
  