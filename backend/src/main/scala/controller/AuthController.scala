package controller
import play.api.mvc._
import play.api.libs.json._
import javax.inject._
import scala.concurrent.{ExecutionContext, Future}
import service.AuthService
import repository.UserRepository
import utility.JwtUtil
import struct.RoleEnum._
import model.User
/*
 * ===========================================================
 *  ファイル名 : AuthController.scala
 *  概要       : パスワードの登録、認証をするコントローラ
 *  @note Googleアカウントを使う2つのコントローラで処理が同じ部分がある(まとめられる箇所がある)
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

@Singleton
class AuthController @Inject()(
    cc: ControllerComponents,
    authService: AuthService,
    jwtUtil: JwtUtil
)(implicit ec: ExecutionContext)
extends AbstractController(cc) {
     /**
     * 新規登録のリクエストで使うdtoの定義
     */
    case class RegisterRequest(username: String, password: String, role: Role)
    implicit val registerFormat : Format[RegisterRequest] = Json.format[RegisterRequest]

    /**
     * パスワードでのログインのリクエストで使うdtoの定義
     */
    case class PasswordLoginRequest(username: String, password: String)
    implicit val passwordLoginRequest : Format[PasswordLoginRequest] = Json.format[PasswordLoginRequest]

    /**
     * @brief ユーザの新規登録をするメソッド
     * @param　RegisterRequestと同じJson
     * @return 201:登録成功、400:入力Jsonが不適、500:AuthServiceの処理で例外
     * @note 500でのエラーで詳しくメッセージを出す処理を作っていない
     */
    def register = Action.async(parse.json) { request =>
         request.body.validate[RegisterRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data => authService.register(data.username, data.password, data.role)
        .map(_ => Ok("User registered"))
        )
    }

    /**
     * @brief passwordでのログインを処理するコントローラ
     * @param　PasswordLoginRequestと同じjson { username, password }
     * @return 200:ログイン成功{message, token, role}のjson、400:入力jsonが不適、401:ユーザネームかパスワードが不一致、500:JWTトークンの発行に失敗
     */
    def signIn = Action.async(parse.json) { request =>
        request.body.validate[PasswordLoginRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data => authService.authenticate(data.username, data.password)
        .map {
            case Some(user: User) =>
                val token : String = jwtUtil.createToken(user.id, user.role)
                Ok(Json.obj(
                    "message" -> "Login success",
                    "token" -> token,
                    "role" -> user.role
                ))
                .withCookies(Cookie("auth_token", token, httpOnly = true))
                case None =>
                    Unauthorized(Json.obj("error" -> "Invalid username or password"))
        }
        .recover {
          case ex: Throwable =>
            InternalServerError(Json.obj(
              "error" -> "userテーブルをデータベースに作ってないよ",
              "details" -> ex.getMessage
            ))
        }
        )
    }
}
