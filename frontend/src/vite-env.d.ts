/*
 * ===========================================================
 *  ファイル名 : vite-env.d.ts
 *  概要       : .envファイルの定数をreact内で使うことを宣言するファイル
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-11
 * ===========================================================
 */

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    readonly MODE: string;
    // 他の環境変数を作った場合、ここに追加
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}