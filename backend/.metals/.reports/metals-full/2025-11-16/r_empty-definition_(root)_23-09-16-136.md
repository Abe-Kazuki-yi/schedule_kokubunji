error id: file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala:javax/inject/Inject#
file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala
empty definition using pc, found symbol in pc: 
found definition using semanticdb; symbol javax/inject/Inject#
empty definition using fallback
non-local guesses:

offset: 762
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
import javax.inject.{Inject, Singleton}
import slick.jdbc.JdbcProfile
import model.User
import scala.concurrent.{Future, ExecutionContext}

@Singleton
class UserRepository @@@Inject()(
    protected val dbConfigProvider: play.api.db.slick.DatabaseConfigProvider
)(implicit ec: ExecutionContext) {

  private val dbConfig = dbConfigProvider.get[JdbcProfile]
  import dbConfig.profile.api._  // ← これが正しい！

  private val Users = TableQuery[UserTable]

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