package model
import struct.AccountTypeEnum._
import struct.RoleEnum._
/*
 * ===========================================================
 *  ファイル名 : User.scala
 *  概要       : ユーザ情報をscala内で扱うためのmodel
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * ユーザ情報を表すクラス
 * @param id ID, 自動生成
 * @param username ユーザネーム
 * @param password パスワード, ハッシュ化されている
 * @param role 権限, const.Role
 */
//一応再代入不可のcase classで作成
case class User(
    id: Long,
    username: String,
    password: String,
    role: Role
)