error id: file://<WORKSPACE>/src/main/scala/table/UserTable.scala:`<error>`#`<error>`.
file://<WORKSPACE>/src/main/scala/table/UserTable.scala
empty definition using pc, found symbol in pc: 
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -slick/jdbc/PostgresProfile.api.column.
	 -slick/jdbc/PostgresProfile.api.column#
	 -slick/jdbc/PostgresProfile.api.column().
	 -struct/RoleEnum.column.
	 -struct/RoleEnum.column#
	 -struct/RoleEnum.column().
	 -struct/AccountTypeEnum.column.
	 -struct/AccountTypeEnum.column#
	 -struct/AccountTypeEnum.column().
	 -column.
	 -column#
	 -column().
	 -scala/Predef.column.
	 -scala/Predef.column#
	 -scala/Predef.column().
offset: 789
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
  def email = column[Option[String]]("email", O.Unique)
  def googleId = column[Option[String]]("googleId", O.Unique)
  def password = column[String]("password")
  def accountType = column[AccountType]("password")
  def role = column@@[Role]("role")

  def * = (id, email, googleId, password, role) <> ((User.apply _).tupled, User.unapply)
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