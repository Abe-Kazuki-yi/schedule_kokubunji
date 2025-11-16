package utility
/*
 * ===========================================================
 *  ファイル名 : Constants.scala
 *  概要       : 装置定数を管理する
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * 定数を保存するオブジェクト
 */
object Constants {
  // JWT関連
  val JwtExpirationSeconds: Long = 3600L
  val JwtRefreshExpirationSeconds: Long = 7 * 24 * 3600L // 例: 7日
}
