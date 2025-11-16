file://<WORKSPACE>/src/main/scala/service/AuthService.scala
empty definition using pc, found symbol in pc: 
semanticdb not found
empty definition using fallback
non-local guesses:
	 -struct/RoleEnum.userRepository.findByUsername.
	 -struct/RoleEnum.userRepository.findByUsername#
	 -struct/RoleEnum.userRepository.findByUsername().
	 -struct/AccountTypeEnum.userRepository.findByUsername.
	 -struct/AccountTypeEnum.userRepository.findByUsername#
	 -struct/AccountTypeEnum.userRepository.findByUsername().
	 -userRepository/findByUsername.
	 -userRepository/findByUsername#
	 -userRepository/findByUsername().
	 -scala/Predef.userRepository.findByUsername.
	 -scala/Predef.userRepository.findByUsername#
	 -scala/Predef.userRepository.findByUsername().
offset: 1333
uri: file://<WORKSPACE>/src/main/scala/service/AuthService.scala
text:
```scala
package service
import org.mindrot.jbcrypt.BCrypt
import scala.concurrent.{ExecutionContext, Future}
import javax.inject.Inject
import struct.RoleEnum._
import struct.AccountTypeEnum._
import model.User
import repository.UserRepository

/*
 * ===========================================================
 *  ファイル名 : AuthService.scala
 *  概要       : パスワードをハッシュ化するservice
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * パスワードのハッシュ化をするクラス
 * ハッシュ化と認証を提供
 */
class AuthService @Inject() (userRepository: UserRepository)
                            (implicit ec: ExecutionContext) {

  /**
   * @brief パスワードをハッシュ化してから新規登録
   * @param username ユーザネーム
   * @param password ハッシュ化されていないパスワード
   * @param role 権限
   * @return 登録できた件数、成功の場合1
   */
  def register(username: String, password: String, role: Role): Future[Int] = {
    val hashedPassword : String = BCrypt.hashpw(password, BCrypt.gensalt())
    userRepository.createUserByPassword(username, hashedPassword, role)
  }

  /**
   * @brief パスワードが一致しているかを判断するメソッド
   * @param username ユーザネーム
   * @param password ハッシュ化されていないパスワード
   * @return 成功していた場合userレコード、失敗していた場合None
   */
  def authenticate(username: String, password: String): Future[Option[User]] = {
    //emailアドレスで検索をする
    userRepository.findBy@@Username(email).map {
      //入力のパスワードとdbに登録されているハッシュ化されたパスワードが一致しているか判断
      case Some(user) if BCrypt.checkpw(password, user.password) =>
        Some(user)
      case _ =>
        None
    }
  }

  def authByGoogleId(googleId: String): Future[Option[User]] = {
    userRepository.findByGoogleId(googleId)
  }
}


```


#### Short summary: 

empty definition using pc, found symbol in pc: 