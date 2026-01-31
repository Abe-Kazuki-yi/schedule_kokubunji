/*
 * ===========================================================
 *  ファイル名 : apiClient.ts
 *  概要       :API呼び出し時にtraceIdを付与する
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-12-17
 * ===========================================================
 */
import axios from "axios";
import { generateTraceId } from "./traceId";

export const apiClient = axios.create({
  baseURL: "/api",
});

apiClient.interceptors.request.use(config => {
  const traceId = generateTraceId();

  config.headers["X-Trace-Id"] = traceId;

  return config;
});