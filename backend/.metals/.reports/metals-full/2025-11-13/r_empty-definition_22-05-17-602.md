error id: file://<WORKSPACE>/src/main/scala/table/UserTable.scala:
file://<WORKSPACE>/src/main/scala/table/UserTable.scala
empty definition using pc, found symbol in pc: 
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -slick/jdbc/PostgresProfile.api.Option#
	 -struct/RoleEnum.Option#
	 -struct/AccountTypeEnum.Option#
	 -Option#
	 -scala/Predef.Option#
offset: 696
uri: file://<WORKSPACE>/src/main/scala/table/UserTable.scala
text:
```scala
package table
import slick.jdbc.PostgresProfile.api._
import struct.RoleEnum._
import struct.AccountTypeEnum._
import model.User
/*
 * ===========================================================
 *  ファイル名 : UserTable.scala
 *  概要       : Userの情報をscalaとdbでマッピングする
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * Userをdbとマッピングするクラス
 * SlickのTableクラスとして振る舞う
 */
class UserTable(tag: Tag) extends Table[User](tag, "users") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def mail = column[Option[String]]("mail", O.Unique)
  def googleId = column[Option[String]]("googleId", O.Unique)
  def password = column[@@Option[String]]("password")
  def accountType = column[AccountType]("accountType")
  def role = column[Role]("role")

  def * = (id, mail, googleId, password, role) <> ((User.apply _).tupled, User.unapply)
}

/**
 * TableQurey(SQL文の処理が詰まっている)クラスを提供する
 * serviceで使うのはこっち
 */
object UserTable {
  val methods = TableQuery[UserTable]
}
```


#### Short summary: 

empty definition using pc, found symbol in pc: 