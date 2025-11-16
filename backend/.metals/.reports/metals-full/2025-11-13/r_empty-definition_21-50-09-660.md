error id: file://<WORKSPACE>/src/main/scala/model/User.scala:struct/AccountTypeEnum.
file://<WORKSPACE>/src/main/scala/model/User.scala
empty definition using pc, found symbol in pc: struct/AccountTypeEnum.
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -struct/AccountTypeEnum.struct.AccountTypeEnum.
	 -struct/AccountTypeEnum.
	 -scala/Predef.struct.AccountTypeEnum.
offset: 29
uri: file://<WORKSPACE>/src/main/scala/model/User.scala
text:
```scala
package model
import struct.A@@ccountTypeEnum._
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
 * @param mail mailアドレス(emailかgmail)
 * @param googleId googleの個人番号
 * @param password パスワード, ハッシュ化されている
 * @param role 権限, const.Role
 */
//一応再代入不可のcase classで作成
case class User(
    id: Long,
    email: Option[String],
    googleId : Option[String],
    password: String,
    role: Role
)
```


#### Short summary: 

empty definition using pc, found symbol in pc: struct/AccountTypeEnum.