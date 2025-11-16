file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala
empty definition using pc, found symbol in pc: 
semanticdb not found
empty definition using fallback
non-local guesses:
	 -slick/jdbc/PostgresProfile.api.mail.
	 -slick/jdbc/PostgresProfile.api.mail#
	 -slick/jdbc/PostgresProfile.api.mail().
	 -struct/RoleEnum.mail.
	 -struct/RoleEnum.mail#
	 -struct/RoleEnum.mail().
	 -struct/AccountTypeEnum.mail.
	 -struct/AccountTypeEnum.mail#
	 -struct/AccountTypeEnum.mail().
	 -mail.
	 -mail#
	 -mail().
	 -scala/Predef.mail.
	 -scala/Predef.mail#
	 -scala/Predef.mail().
offset: 1073
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
class UserRepository @Inject()(db: Database)(implicit ec: ExecutionContext) {

    private val users = TableQuery[UserTable]

    /**
     * @brief userテーブルへのEmailでの新規登録
     * @param username ユーザネーム
     * @param password ハッシュ化されたパスワード
     * @param role 権限
     * @return インサートしたデータ数。成功した場合は1。
     * @note パスワードがハッシュ化されているかをチェックする機構はない
     */
    def createUserByEmail(username: String, password: String, role: Role): Future[Int] = {
        val user : User = User(0L, @@mail, None, Some(password), Email, role)
        db.run(users += user)
    }

    /**
     * @brief userテーブルへのGoogleでの新規登録
     * @param mail emailかgmail
     * @param googleId googleの個人番号
     * @param role 権限
     * @return インサートしたデータ数。成功した場合は1。
     * @note パスワードがハッシュ化されているかをチェックする機構はない
     */
    def createUserByGoogle(mail: String, googleId: String, role: Role): Future[Int] = {
        val user : User = User(0L, mail, Some(googleId), None, Google, role)
        db.run(users += user)
    }

    /**
     * @brief userテーブルをmailで検索する
     * @param mail mailアドレス
     * @return 最初にemailが一致したレコード
     */
    def findByMail(mail: String): Future[Option[User]] = {
        db.run(users.filter(_.mail === mail).result.headOption)
    }

}
```


#### Short summary: 

empty definition using pc, found symbol in pc: 