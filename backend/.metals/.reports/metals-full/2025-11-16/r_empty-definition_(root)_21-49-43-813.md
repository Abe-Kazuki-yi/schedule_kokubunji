error id: file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala:
file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala
empty definition using pc, found symbol in pc: 
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -slick/jdbc/PostgresProfile.api.Users#
	 -struct/RoleEnum.Users#
	 -struct/AccountTypeEnum.Users#
	 -profile/api/Users#
	 -Users#
	 -scala/Predef.Users#
offset: 816
uri: file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala
text:
```scala
package repository
import slick.jdbc.PostgresProfile.api._
import scala.concurrent.{Future, ExecutionContext}
import javax.inject.{Inject, Singleton}
import table.UserTable
import struct.RoleEnum._
import struct.AccountTypeEnum._
import model.User
/*
 * ===========================================================
 *  ファイル名 : UserRepository.scala
 *  概要       : Userの情報を使った処理を提供するservice
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * Userテーブルとの処理を提供するクラス
 * @param users UserTableの基本的な処理が入ったTableQurey型
 */
@Singleton
class UserRepository @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext)
  extends HasDatabaseConfigProvider[JdbcProfile] {
  
  import profile.api._

  private val users = TableQuery[@@Users]

    /**
     * @brief userテーブルへのEmailでの新規登録
     * @param username ユーザネーム
     * @param password ハッシュ化されたパスワード
     * @param role 権限
     * @return インサートしたデータ数。成功した場合は1。
     * @note パスワードがハッシュ化されているかをチェックする機構はない
     */
    def createUser(username: String, password: String, role: Role): Future[Int] = {
        val user : User = User(0L, username, password, role)
        db.run(users += user)
    }

    /**
     * @brief userテーブルをusernameで検索する
     * @param username ユーザネーム
     * @return 最初にusernameが一致したレコード
     */
    def findByUsername(username: String): Future[Option[User]] = {
        db.run(users.filter(_.username === Option(username)).result.headOption)
    }

}
```


#### Short summary: 

empty definition using pc, found symbol in pc: 