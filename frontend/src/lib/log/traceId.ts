/*
 * ===========================================================
 *  ファイル名 : traceId.ts
 *  概要       : traceIdを生成する
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-12-17
 * ===========================================================
 */

export function generateTraceId(): string {
    return crypto.randomUUID(); 
  }