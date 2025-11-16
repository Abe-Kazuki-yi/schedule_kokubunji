file://<WORKSPACE>/backend/src/main/scala/controller/AuthController.scala
empty definition using pc, found symbol in pc: 
semanticdb not found
empty definition using fallback
non-local guesses:
	 -play/api/mvc/LoginRequest#
	 -play/api/libs/json/LoginRequest#
	 -javax/inject/LoginRequest#
	 -LoginRequest#
	 -scala/Predef.LoginRequest#
offset: 939
uri: file://<WORKSPACE>/backend/src/main/scala/controller/AuthController.scala
text:
```scala
package controller
import play.api.mvc._
import play.api.libs.json._
import javax.inject._
import scala.concurrent.{ExecutionContext, Future}
import service.AuthService
import utility.JwtUtil
import enum.Role

/*
 * ===========================================================
 *  ファイル名 : AuthController.scala
 *  概要       : パスワードの登録、認証をするコントローラ
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
     * ログインのリクエストで使うdtoの定義
     */
    case class LoginRequest@@(username: String, password: String)
    implicit val loginFormat : Format[LoginRequest] = Json.format[LoginRequest]

    /**
     * @brief ユーザの新規登録をするメソッド
     * @param　RegisterRequestと同じJson
     * @return 200:登録成功、400:入力Jsonが不適、500:AuthServiceの処理で例外
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
     * @brief ログインを処理するメソッド
     * @param　LoginRequestと同じjson
     * @return 200:ログイン成功{message, token, role}のjson、400:入力jsonが不適、401:ユーザネームかパスワードが不一致、500:JWTトークンの発行に失敗
     * @note ログイン時のセッション確立を作っていない.authServiceの例外かcrateTokenの例外か判断できるか不明
     */
    def login = Action.async(parse.json) { request =>
        request.body.validate[LoginRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data =>
        //リクエストのjson形式が正しいならユーザネームとパスワードが合っているか判断
        authService.authenticate(data.username, data.password).map {
            //パスワードが合っている場合、JWTトークンを新規発行。またレコードで一致したUserの権限を返す
            case Some(user) =>
                val token : String = jwtUtil.createToken(user.id, user.role)
                Ok(Json.obj(
                "message" -> "Login success",
                "token" -> token,
                "role" -> user.role
            ))
            case None =>
                Unauthorized("Invalid username or password")
        }
        )
    }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: 