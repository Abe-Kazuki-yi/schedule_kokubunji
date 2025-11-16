error id: file://<WORKSPACE>/src/main/scala/controller/AuthController.scala:play/api/libs/json/Json.obj().
file://<WORKSPACE>/src/main/scala/controller/AuthController.scala
empty definition using pc, found symbol in pc: 
found definition using semanticdb; symbol play/api/libs/json/Json.obj().
empty definition using fallback
non-local guesses:

offset: 7073
uri: file://<WORKSPACE>/src/main/scala/controller/AuthController.scala
text:
```scala
package controller
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.ws._
import javax.inject._
import scala.concurrent.{ExecutionContext, Future}
import service.AuthService
import repository.UserRepository
import utility.JwtUtil
import struct.RoleEnum._
import struct.AccountTypeEnum._
import model.User
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
    ws: WSClient,
    authService: AuthService,
    userRepository: UserRepository,
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
     * google Authを使うときのリクエストdto
     */
    case class GoogleAuthRequest(code: String)
    implicit val googleAuthFormat : Format[GoogleAuthRequest] = Json.format[GoogleAuthRequest]

    /**
     * @brief ユーザの新規登録をするメソッド
     * @param　RegisterRequestと同じJson
     * @return 200:登録成功、400:入力Jsonが不適、500:AuthServiceの処理で例外
     * @note 500でのエラーで詳しくメッセージを出す処理を作っていない
     */
    def registerByPassword = Action.async(parse.json) { request =>
         request.body.validate[RegisterRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data => authService.registerByPassword(data.username, data.password, data.role)
        .map(_ => Ok("User registered"))
        )
    }

    /**
     * @brief passwordでのログインを処理するコントローラ
     * @param　PasswordLoginRequestと同じjson { username, password }
     * @return 200:ログイン成功{message, token, role}のjson、400:入力jsonが不適、401:ユーザネームかパスワードが不一致、500:JWTトークンの発行に失敗
     */
    def signInPassword = Action.async(parse.json) { request =>
        request.body.validate[PasswordLoginRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data => authService.authenticate(data.username, data.password).map {
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
        )
    }

    /**
     * @brief googlユーザの新規登録をするメソッドeを使ったログインを処理するコントローラ
     * @param　GoogleAuthRequestと同じjson{ code }
     * @return 200:ログイン成功{message, token, role}のjson、400:入力jsonが不適、401:googleIdでデータベースに登録がない、500:JWTトークンの発行に失敗
     */
    def registerByGoogle = Action.async(parse.json) { request =>
        request.body.validate[GoogleAuthRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data => {
            val code : String = data.code

            //gooleのoauthのサービスにfrontからの情報を渡してトークンをもらう
            val tokenRequest : Future[WSResponse] = ws.url("https://oauth2.googleapis.com/token")
            .addQueryStringParameters(
                "code" -> code,
                "client_id" -> sys.env("GOOGLE_CLIENT_ID"),
                "client_secret" -> sys.env("GOOGLE_CLIENT_SECRET"),
                "redirect_uri" -> sys.env("GOOGLE_REDIRECT_URI"),
                "grant_type" -> "authorization_code"
            )
            .post("")

            tokenRequest.flatMap { tokenResp =>
                //アクセストークンをscala上に保存
                val accessToken : String = (tokenResp.json \ "access_token").as[String]

                //  アクセストークンをリクエストヘッダーに付けて、Googleからアカウントの個人情報取得
                val userInfoReq : Future[WSResponse] = ws.url("https://www.googleapis.com/oauth2/v2/userinfo")
                .addHttpHeaders("Authorization" -> s"Bearer $accessToken")
                .get()

                userInfoReq.flatMap { userResp =>
                    val googleId: String = (userResp.json \ "id").as[String]

                    // GoogleIdでのユーザがいればログイン
                    userRepository.findByGoogleId(googleId).map {
                        case Some(user) =>
                            val token = jwtUtil.createToken(user.id, user.role)
                            Ok(Json.obj(
                                "message" -> "Login success",
                                "token" -> token,
                                "role" -> user.role
                        )).withCookies(Cookie("auth_token", token, httpOnly = true))
                        case None =>
                            Unauthorized(Json.obj("error" -> "Invalid google accunt"))
                    }
                }
            }
        
        }
        )
    }

    /**
     * @brief googleを使ったログインを処理するコントローラ
     * @param　GoogleAuthRequestと同じjson{ code }
     * @return 200:ログイン成功{message, token, role}のjson、400:入力jsonが不適、401:googleIdでデータベースに登録がない、500:JWTトークンの発行に失敗
     */
    def signInGoogle = Action.async(parse.json) { request =>
        request.body.validate[GoogleAuthRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data => {
            val code : String = data.code

            //gooleのoauthのサービスにfrontからの情報を渡してトークンをもらう
            val tokenRequest : Future[WSResponse] = ws.url("https://oauth2.googleapis.com/token")
            .addQueryStringParameters(
                "code" -> code,
                "client_id" -> sys.env("GOOGLE_CLIENT_ID"),
                "client_secret" -> sys.env("GOOGLE_CLIENT_SECRET"),
                "redirect_uri" -> sys.env("GOOGLE_REDIRECT_URI"),
                "grant_type" -> "authorization_code"
            )
            .post("")

            tokenRequest.flatMap { tokenResp =>
                //アクセストークンをscala上に保存
                val accessToken : String = (tokenResp.json \ "access_token").as[String]

                //  アクセストークンをリクエストヘッダーに付けて、Googleからアカウントの個人情報取得
                val userInfoReq : Future[WSResponse] = ws.url("https://www.googleapis.com/oauth2/v2/userinfo")
                .addHttpHeaders("Authorization" -> s"Bearer $accessToken")
                .get()

                userInfoReq.flatMap { userResp =>
                    val googleId: String = (userResp.json \ "id").as[String]

                    // GoogleIdでのユーザがいればログイン
                    userRepository.findGoogleUser(googleId).map {
                        case Some(user) =>
                            val token = jwtUtil.createToken(user.id, user.role)
                            Ok(Json.ob@@j(
                                "message" -> "Login success",
                                "token" -> token,
                                "role" -> user.role
                        )).withCookies(Cookie("auth_token", token, httpOnly = true))
                        case None =>
                            Unauthorized(Json.obj("error" -> "Invalid google accunt"))
                    }
                }
            }
        
        }
        )
    }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: 