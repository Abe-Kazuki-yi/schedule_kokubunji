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
    userRepository.createUser(username, hashedPassword, role)
  }

  /**
   * @brief パスワードが一致しているかを判断するメソッド
   * @param username ユーザネーム
   * @param password ハッシュ化されていないパスワード
   * @return 成功していた場合userレコード、失敗していた場合None
   */
  def authenticate(username: String, password: String): Future[Option[User]] = {
    userRepository.findByUsername(username).map {
      case Some(user) if user.password.exists(hashed => BCrypt.checkpw(username, password)) =>
        Some(user)
      case _ =>
        None
    }
  }

}