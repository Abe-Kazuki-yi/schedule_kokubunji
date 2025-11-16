error id: 11C49E91E1704C36020D68E2C0835DC7
file://<WORKSPACE>/src/main/scala/controller/AuthController.scala
### scala.reflect.internal.FatalError: 
  ThisType(value $anonfun) for sym which is not a class
     while compiling: file://<WORKSPACE>/src/main/scala/controller/AuthController.scala
        during phase: globalPhase=<no phase>, enteringPhase=parser
     library version: version 2.13.17
    compiler version: version 2.13.17
  reconstructed args: -deprecation -encoding utf8 -unchecked -Wconf:cat=unchecked:w -Wconf:cat=deprecation:ws -Wconf:cat=feature:ws -Wconf:cat=optimizer:ws -classpath <WORKSPACE>/.bloop/root/bloop-bsp-clients-classes/classes-Metals-sy6PNeiMQymS8LU3rOga8w==:<HOME>/.cache/bloop/semanticdb/com.sourcegraph.semanticdb-javac.0.11.1/semanticdb-javac-0.11.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.17/scala-library-2.13.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/twirl/twirl-api_2.13/2.0.9/twirl-api_2.13-2.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-server_2.13/3.0.9/play-server_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-logback_2.13/3.0.9/play-logback_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-pekko-http-server_2.13/3.0.9/play-pekko-http-server_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-filters-helpers_2.13/3.0.9/play-filters-helpers_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-guice_2.13/3.0.9/play-guice_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws_2.13/3.0.4/play-ws_2.13-3.0.4.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/postgresql/postgresql/42.7.3/postgresql-42.7.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-slick_2.13/5.2.0/play-slick_2.13-5.2.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-slick-evolutions_2.13/5.2.0/play-slick-evolutions_2.13-5.2.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/slick/slick_2.13/3.4.1/slick_2.13-3.4.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/slick/slick-hikaricp_2.13/3.4.1/slick-hikaricp_2.13-3.4.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-json_2.13/2.10.2/play-json_2.13-2.10.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/mindrot/jbcrypt/0.4/jbcrypt-0.4.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-play_2.13/10.0.1/jwt-play_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-xml_2.13/2.2.0/scala-xml_2.13-2.2.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play_2.13/3.0.9/play_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/ch/qos/logback/logback-classic/1.5.18/logback-classic-1.5.18.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-streams_2.13/3.0.9/play-streams_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-http-core_2.13/1.0.1/pekko-http-core_2.13-1.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/inject/guice/6.0.0/guice-6.0.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/inject/extensions/guice-assistedinject/6.0.0/guice-assistedinject-6.0.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone_2.13/3.0.3/play-ws-standalone_2.13-3.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone-xml_2.13/3.0.3/play-ws-standalone-xml_2.13-3.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone-json_2.13/3.0.3/play-ws-standalone-json_2.13-3.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-stream_2.13/1.0.3/pekko-stream_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/checkerframework/checker-qual/3.42.0/checker-qual-3.42.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play_2.13/2.9.0/play_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-jdbc-api_2.13/2.9.0/play-jdbc-api_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-jdbc-evolutions_2.13/2.9.0/play-jdbc-evolutions_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/slf4j-api/2.0.17/slf4j-api-2.0.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/config/1.4.5/config-1.4.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/reactivestreams/reactive-streams/1.0.4/reactive-streams-1.0.4.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-collection-compat_2.13/2.8.1/scala-collection-compat_2.13-2.8.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/zaxxer/HikariCP/4.0.3/HikariCP-4.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-functional_2.13/2.10.2/play-functional_2.13-2.10.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-reflect/2.13.17/scala-reflect-2.13.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-core/2.14.3/jackson-core-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.14.3/jackson-annotations-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.14.3/jackson-datatype-jdk8-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.14.3/jackson-datatype-jsr310-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.14.3/jackson-databind-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-play-json_2.13/10.0.1/jwt-play-json_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-build-link/3.0.9/play-build-link-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-configuration_2.13/3.0.9/play-configuration_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/jul-to-slf4j/2.0.17/jul-to-slf4j-2.0.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/jcl-over-slf4j/2.0.17/jcl-over-slf4j-2.0.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-actor_2.13/1.0.3/pekko-actor_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-actor-typed_2.13/1.0.3/pekko-actor-typed_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-slf4j_2.13/1.0.3/pekko-slf4j_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-serialization-jackson_2.13/1.0.3/pekko-serialization-jackson_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/dataformat/jackson-dataformat-cbor/2.14.3/jackson-dataformat-cbor-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/module/jackson-module-parameter-names/2.14.3/jackson-module-parameter-names-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/module/jackson-module-scala_2.13/2.14.3/jackson-module-scala_2.13-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-api/0.11.5/jjwt-api-0.11.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-impl/0.11.5/jjwt-impl-0.11.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-jackson/0.11.5/jjwt-jackson-0.11.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-json_2.13/3.0.5/play-json_2.13-3.0.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/guava/32.1.3-jre/guava-32.1.3-jre.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/javax/inject/javax.inject/1/javax.inject-1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/ssl-config-core_2.13/0.6.1/ssl-config-core_2.13-0.6.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-parser-combinators_2.13/1.1.2/scala-parser-combinators_2.13-1.1.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/ch/qos/logback/logback-core/1.5.18/logback-core-1.5.18.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-parsing_2.13/1.0.1/pekko-parsing_2.13-1.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/parboiled/parboiled_2.13/2.5.0/parboiled_2.13-2.5.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/jakarta/inject/jakarta.inject-api/2.0.1/jakarta.inject-api-2.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/aopalliance/aopalliance/1.0/aopalliance-1.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/errorprone/error_prone_annotations/2.21.1/error_prone_annotations-2.21.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-protobuf-v3_2.13/1.0.3/pekko-protobuf-v3_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-build-link/2.9.0/play-build-link-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-streams_2.13/2.9.0/play-streams_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-configuration_2.13/2.9.0/play-configuration_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/twirl-api_2.13/1.6.2/twirl-api_2.13-1.6.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-actor_2.13/2.6.21/akka-actor_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-actor-typed_2.13/2.6.21/akka-actor-typed_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-slf4j_2.13/2.6.21/akka-slf4j_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-serialization-jackson_2.13/2.6.21/akka-serialization-jackson_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-json-common_2.13/10.0.1/jwt-json-common_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-exceptions/3.0.9/play-exceptions-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/lz4/lz4-java/1.8.0/lz4-java-1.8.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/thoughtworks/paranamer/paranamer/2.8/paranamer-2.8.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-functional_2.13/3.0.5/play-functional_2.13-3.0.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/listenablefuture/9999.0-empty-to-avoid-conflict-with-guava/listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/code/findbugs/jsr305/3.0.2/jsr305-3.0.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/j2objc/j2objc-annotations/2.8/j2objc-annotations-2.8.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-exceptions/2.9.0/play-exceptions-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-stream_2.13/2.6.21/akka-stream_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-java8-compat_2.13/1.0.0/scala-java8-compat_2.13-1.0.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-core_2.13/10.0.1/jwt-core_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-protobuf-v3_2.13/2.6.21/akka-protobuf-v3_2.13-2.6.21.jar -Xplugin-require:semanticdb -Yrangepos -Ymacro-expand:discard -Ycache-plugin-class-loader:last-modified -Ypresentation-any-thread

  last tree to typer: TypeTree(trait Action)
       tree position: line 90 of file://<WORKSPACE>/src/main/scala/controller/AuthController.scala
            tree tpe: play.api.mvc.Action[play.api.libs.json.JsValue]
              symbol: abstract trait Action in package mvc
   symbol definition: abstract trait Action[A <: <?>] extends EssentialAction (a ClassSymbol)
      symbol package: play.api.mvc
       symbol owners: trait Action
           call site: <none> in <none>

== Source file context for tree position ==

    87      * @return 
    88      * @note 一度
    89      */
    90     def signInGoogle = Action.async(parse.json) { request =>
    91         request.body.validate[GoogleAuthRequest].fold(
    92         _ => Future.successful(BadRequest("Invalid request")),
    93         data => {

occurred in the presentation compiler.



action parameters:
offset: 4380
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
    jwtUtil: JwtUtil
)(implicit ec: ExecutionContext)
extends AbstractController(cc) {
     /**
     * 新規登録のリクエストで使うdtoの定義
     */
    case class RegisterRequest(username: String, password: String, role: Role)
    implicit val registerFormat : Format[RegisterRequest] = Json.format[RegisterRequest]

    /**
     * e-mailでのログインのリクエストで使うdtoの定義
     */
    case class EmailLoginRequest(email: String, password: String)
    implicit val emailLoginRequest : Format[EmailLoginRequest] = Json.format[EmailLoginRequest]

    /**
     * google Authを使うときのリクエストdto
     */
    case class GoogleAuthRequest(code: String)
    implicit val googleAuthFormat = Json.format[GoogleAuthRequest]

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
     * @brief メールでのログインを処理するコントローラ
     * @param　EmailLoginRequestと同じjson { email, password }
     * @return 200:ログイン成功{message, token, role}のjson、400:入力jsonが不適、401:ユーザネームかパスワードが不一致、500:JWTトークンの発行に失敗
     */
    def signInEmail = Action.async(parse.json) { request =>
        request.body.validate[EmailLoginRequest].fold(
        _ => Future.successful(BadRequest("Invalid request")),
        data => authService.authenticate(data.email, data.password).map {
            case Some(user: User) =>
                val token : String = jwtUtil.createToken(user.id, user.role)
                Ok(Json.obj(
                    "message" -> "Login success",
                    "token" -> token,
                    "role" -> user.role
                ))
                .withCookies(Cookie("auth_token", token, httpOnly = true))
                case None =>
                    Unauthorized(Json.obj("error" -> "Invalid email or password"))
        }
        )
    }

    /**
     * @brief googleを使ったログインを処理するコントローラ
     * @param　GoogleAuthRequestと同じjson{ code }
     * @return 
     * @note 一度
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
                }

                            // 3. DBに存在すれば取得
                authService.findGoogleUser(@@googleId).map { user =>
                    val token : String = jwtUtil.createToken(user.id, user.role)
                    Ok(Json.obj(
                        "message" -> "Login success",
                        "token" -> token,
                        "role" -> user.role
                    ))
                    .withCookies(Cookie("auth_token", token, httpOnly = true))
                }
            }
        
        }
        )
    }
}

```


presentation compiler configuration:
Scala version: 2.13.17
Classpath:
<WORKSPACE>/.bloop/root/bloop-bsp-clients-classes/classes-Metals-sy6PNeiMQymS8LU3rOga8w== [exists ], <HOME>/.cache/bloop/semanticdb/com.sourcegraph.semanticdb-javac.0.11.1/semanticdb-javac-0.11.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.17/scala-library-2.13.17.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/twirl/twirl-api_2.13/2.0.9/twirl-api_2.13-2.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-server_2.13/3.0.9/play-server_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-logback_2.13/3.0.9/play-logback_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-pekko-http-server_2.13/3.0.9/play-pekko-http-server_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-filters-helpers_2.13/3.0.9/play-filters-helpers_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-guice_2.13/3.0.9/play-guice_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws_2.13/3.0.4/play-ws_2.13-3.0.4.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/postgresql/postgresql/42.7.3/postgresql-42.7.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-slick_2.13/5.2.0/play-slick_2.13-5.2.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-slick-evolutions_2.13/5.2.0/play-slick-evolutions_2.13-5.2.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/slick/slick_2.13/3.4.1/slick_2.13-3.4.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/slick/slick-hikaricp_2.13/3.4.1/slick-hikaricp_2.13-3.4.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-json_2.13/2.10.2/play-json_2.13-2.10.2.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/mindrot/jbcrypt/0.4/jbcrypt-0.4.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-play_2.13/10.0.1/jwt-play_2.13-10.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-xml_2.13/2.2.0/scala-xml_2.13-2.2.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play_2.13/3.0.9/play_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/ch/qos/logback/logback-classic/1.5.18/logback-classic-1.5.18.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-streams_2.13/3.0.9/play-streams_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-http-core_2.13/1.0.1/pekko-http-core_2.13-1.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/inject/guice/6.0.0/guice-6.0.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/inject/extensions/guice-assistedinject/6.0.0/guice-assistedinject-6.0.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone_2.13/3.0.3/play-ws-standalone_2.13-3.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone-xml_2.13/3.0.3/play-ws-standalone-xml_2.13-3.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone-json_2.13/3.0.3/play-ws-standalone-json_2.13-3.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-stream_2.13/1.0.3/pekko-stream_2.13-1.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/checkerframework/checker-qual/3.42.0/checker-qual-3.42.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play_2.13/2.9.0/play_2.13-2.9.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-jdbc-api_2.13/2.9.0/play-jdbc-api_2.13-2.9.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-jdbc-evolutions_2.13/2.9.0/play-jdbc-evolutions_2.13-2.9.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/slf4j-api/2.0.17/slf4j-api-2.0.17.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/config/1.4.5/config-1.4.5.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/reactivestreams/reactive-streams/1.0.4/reactive-streams-1.0.4.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-collection-compat_2.13/2.8.1/scala-collection-compat_2.13-2.8.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/zaxxer/HikariCP/4.0.3/HikariCP-4.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-functional_2.13/2.10.2/play-functional_2.13-2.10.2.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-reflect/2.13.17/scala-reflect-2.13.17.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-core/2.14.3/jackson-core-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.14.3/jackson-annotations-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.14.3/jackson-datatype-jdk8-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.14.3/jackson-datatype-jsr310-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.14.3/jackson-databind-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-play-json_2.13/10.0.1/jwt-play-json_2.13-10.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-build-link/3.0.9/play-build-link-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-configuration_2.13/3.0.9/play-configuration_2.13-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/jul-to-slf4j/2.0.17/jul-to-slf4j-2.0.17.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/jcl-over-slf4j/2.0.17/jcl-over-slf4j-2.0.17.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-actor_2.13/1.0.3/pekko-actor_2.13-1.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-actor-typed_2.13/1.0.3/pekko-actor-typed_2.13-1.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-slf4j_2.13/1.0.3/pekko-slf4j_2.13-1.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-serialization-jackson_2.13/1.0.3/pekko-serialization-jackson_2.13-1.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/dataformat/jackson-dataformat-cbor/2.14.3/jackson-dataformat-cbor-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/module/jackson-module-parameter-names/2.14.3/jackson-module-parameter-names-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/module/jackson-module-scala_2.13/2.14.3/jackson-module-scala_2.13-2.14.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-api/0.11.5/jjwt-api-0.11.5.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-impl/0.11.5/jjwt-impl-0.11.5.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-jackson/0.11.5/jjwt-jackson-0.11.5.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-json_2.13/3.0.5/play-json_2.13-3.0.5.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/guava/32.1.3-jre/guava-32.1.3-jre.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/javax/inject/javax.inject/1/javax.inject-1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/ssl-config-core_2.13/0.6.1/ssl-config-core_2.13-0.6.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-parser-combinators_2.13/1.1.2/scala-parser-combinators_2.13-1.1.2.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/ch/qos/logback/logback-core/1.5.18/logback-core-1.5.18.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-parsing_2.13/1.0.1/pekko-parsing_2.13-1.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/parboiled/parboiled_2.13/2.5.0/parboiled_2.13-2.5.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/jakarta/inject/jakarta.inject-api/2.0.1/jakarta.inject-api-2.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/aopalliance/aopalliance/1.0/aopalliance-1.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/errorprone/error_prone_annotations/2.21.1/error_prone_annotations-2.21.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-protobuf-v3_2.13/1.0.3/pekko-protobuf-v3_2.13-1.0.3.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-build-link/2.9.0/play-build-link-2.9.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-streams_2.13/2.9.0/play-streams_2.13-2.9.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-configuration_2.13/2.9.0/play-configuration_2.13-2.9.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/twirl-api_2.13/1.6.2/twirl-api_2.13-1.6.2.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-actor_2.13/2.6.21/akka-actor_2.13-2.6.21.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-actor-typed_2.13/2.6.21/akka-actor-typed_2.13-2.6.21.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-slf4j_2.13/2.6.21/akka-slf4j_2.13-2.6.21.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-serialization-jackson_2.13/2.6.21/akka-serialization-jackson_2.13-2.6.21.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-json-common_2.13/10.0.1/jwt-json-common_2.13-10.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-exceptions/3.0.9/play-exceptions-3.0.9.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/lz4/lz4-java/1.8.0/lz4-java-1.8.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/thoughtworks/paranamer/paranamer/2.8/paranamer-2.8.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-functional_2.13/3.0.5/play-functional_2.13-3.0.5.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/listenablefuture/9999.0-empty-to-avoid-conflict-with-guava/listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/code/findbugs/jsr305/3.0.2/jsr305-3.0.2.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/j2objc/j2objc-annotations/2.8/j2objc-annotations-2.8.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-exceptions/2.9.0/play-exceptions-2.9.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-stream_2.13/2.6.21/akka-stream_2.13-2.6.21.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-java8-compat_2.13/1.0.0/scala-java8-compat_2.13-1.0.0.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-core_2.13/10.0.1/jwt-core_2.13-10.0.1.jar [exists ], <HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-protobuf-v3_2.13/2.6.21/akka-protobuf-v3_2.13-2.6.21.jar [exists ]
Options:
-deprecation -unchecked -encoding utf8 -Yrangepos -Xplugin-require:semanticdb




#### Error stacktrace:

```
scala.reflect.internal.Reporting.abort(Reporting.scala:70)
	scala.reflect.internal.Reporting.abort$(Reporting.scala:66)
	scala.reflect.internal.SymbolTable.abort(SymbolTable.scala:28)
	scala.reflect.internal.Types$ThisType.<init>(Types.scala:1389)
	scala.reflect.internal.Types$UniqueThisType.<init>(Types.scala:1409)
	scala.reflect.internal.Types$ThisType$.apply(Types.scala:1413)
	scala.meta.internal.pc.AutoImportsProvider$$anonfun$1.applyOrElse(AutoImportsProvider.scala:97)
	scala.meta.internal.pc.AutoImportsProvider$$anonfun$1.applyOrElse(AutoImportsProvider.scala:79)
	scala.collection.immutable.List.collect(List.scala:257)
	scala.meta.internal.pc.AutoImportsProvider.autoImports(AutoImportsProvider.scala:79)
	scala.meta.internal.pc.ScalaPresentationCompiler.$anonfun$autoImports$1(ScalaPresentationCompiler.scala:399)
	scala.meta.internal.pc.CompilerAccess.retryWithCleanCompiler(CompilerAccess.scala:182)
	scala.meta.internal.pc.CompilerAccess.$anonfun$withSharedCompiler$1(CompilerAccess.scala:155)
	scala.Option.map(Option.scala:242)
	scala.meta.internal.pc.CompilerAccess.withSharedCompiler(CompilerAccess.scala:154)
	scala.meta.internal.pc.CompilerAccess.$anonfun$withInterruptableCompiler$1(CompilerAccess.scala:92)
	scala.meta.internal.pc.CompilerAccess.$anonfun$onCompilerJobQueue$1(CompilerAccess.scala:209)
	scala.meta.internal.pc.CompilerJobQueue$Job.run(CompilerJobQueue.scala:152)
	java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
	java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
	java.base/java.lang.Thread.run(Thread.java:840)
```
#### Short summary: 

scala.reflect.internal.FatalError: 
  ThisType(value $anonfun) for sym which is not a class
     while compiling: file://<WORKSPACE>/src/main/scala/controller/AuthController.scala
        during phase: globalPhase=<no phase>, enteringPhase=parser
     library version: version 2.13.17
    compiler version: version 2.13.17
  reconstructed args: -deprecation -encoding utf8 -unchecked -Wconf:cat=unchecked:w -Wconf:cat=deprecation:ws -Wconf:cat=feature:ws -Wconf:cat=optimizer:ws -classpath <WORKSPACE>/.bloop/root/bloop-bsp-clients-classes/classes-Metals-sy6PNeiMQymS8LU3rOga8w==:<HOME>/.cache/bloop/semanticdb/com.sourcegraph.semanticdb-javac.0.11.1/semanticdb-javac-0.11.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.17/scala-library-2.13.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/twirl/twirl-api_2.13/2.0.9/twirl-api_2.13-2.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-server_2.13/3.0.9/play-server_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-logback_2.13/3.0.9/play-logback_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-pekko-http-server_2.13/3.0.9/play-pekko-http-server_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-filters-helpers_2.13/3.0.9/play-filters-helpers_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-guice_2.13/3.0.9/play-guice_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws_2.13/3.0.4/play-ws_2.13-3.0.4.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/postgresql/postgresql/42.7.3/postgresql-42.7.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-slick_2.13/5.2.0/play-slick_2.13-5.2.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-slick-evolutions_2.13/5.2.0/play-slick-evolutions_2.13-5.2.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/slick/slick_2.13/3.4.1/slick_2.13-3.4.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/slick/slick-hikaricp_2.13/3.4.1/slick-hikaricp_2.13-3.4.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-json_2.13/2.10.2/play-json_2.13-2.10.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/mindrot/jbcrypt/0.4/jbcrypt-0.4.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-play_2.13/10.0.1/jwt-play_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-xml_2.13/2.2.0/scala-xml_2.13-2.2.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play_2.13/3.0.9/play_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/ch/qos/logback/logback-classic/1.5.18/logback-classic-1.5.18.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-streams_2.13/3.0.9/play-streams_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-http-core_2.13/1.0.1/pekko-http-core_2.13-1.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/inject/guice/6.0.0/guice-6.0.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/inject/extensions/guice-assistedinject/6.0.0/guice-assistedinject-6.0.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone_2.13/3.0.3/play-ws-standalone_2.13-3.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone-xml_2.13/3.0.3/play-ws-standalone-xml_2.13-3.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-ws-standalone-json_2.13/3.0.3/play-ws-standalone-json_2.13-3.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-stream_2.13/1.0.3/pekko-stream_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/checkerframework/checker-qual/3.42.0/checker-qual-3.42.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play_2.13/2.9.0/play_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-jdbc-api_2.13/2.9.0/play-jdbc-api_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-jdbc-evolutions_2.13/2.9.0/play-jdbc-evolutions_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/slf4j-api/2.0.17/slf4j-api-2.0.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/config/1.4.5/config-1.4.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/reactivestreams/reactive-streams/1.0.4/reactive-streams-1.0.4.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-collection-compat_2.13/2.8.1/scala-collection-compat_2.13-2.8.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/zaxxer/HikariCP/4.0.3/HikariCP-4.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-functional_2.13/2.10.2/play-functional_2.13-2.10.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-reflect/2.13.17/scala-reflect-2.13.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-core/2.14.3/jackson-core-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.14.3/jackson-annotations-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jdk8/2.14.3/jackson-datatype-jdk8-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/datatype/jackson-datatype-jsr310/2.14.3/jackson-datatype-jsr310-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.14.3/jackson-databind-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-play-json_2.13/10.0.1/jwt-play-json_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-build-link/3.0.9/play-build-link-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-configuration_2.13/3.0.9/play-configuration_2.13-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/jul-to-slf4j/2.0.17/jul-to-slf4j-2.0.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/slf4j/jcl-over-slf4j/2.0.17/jcl-over-slf4j-2.0.17.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-actor_2.13/1.0.3/pekko-actor_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-actor-typed_2.13/1.0.3/pekko-actor-typed_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-slf4j_2.13/1.0.3/pekko-slf4j_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-serialization-jackson_2.13/1.0.3/pekko-serialization-jackson_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/dataformat/jackson-dataformat-cbor/2.14.3/jackson-dataformat-cbor-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/module/jackson-module-parameter-names/2.14.3/jackson-module-parameter-names-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/fasterxml/jackson/module/jackson-module-scala_2.13/2.14.3/jackson-module-scala_2.13-2.14.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-api/0.11.5/jjwt-api-0.11.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-impl/0.11.5/jjwt-impl-0.11.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/io/jsonwebtoken/jjwt-jackson/0.11.5/jjwt-jackson-0.11.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-json_2.13/3.0.5/play-json_2.13-3.0.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/guava/32.1.3-jre/guava-32.1.3-jre.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/javax/inject/javax.inject/1/javax.inject-1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/ssl-config-core_2.13/0.6.1/ssl-config-core_2.13-0.6.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-parser-combinators_2.13/1.1.2/scala-parser-combinators_2.13-1.1.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/ch/qos/logback/logback-core/1.5.18/logback-core-1.5.18.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-parsing_2.13/1.0.1/pekko-parsing_2.13-1.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/parboiled/parboiled_2.13/2.5.0/parboiled_2.13-2.5.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/jakarta/inject/jakarta.inject-api/2.0.1/jakarta.inject-api-2.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/aopalliance/aopalliance/1.0/aopalliance-1.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/errorprone/error_prone_annotations/2.21.1/error_prone_annotations-2.21.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/apache/pekko/pekko-protobuf-v3_2.13/1.0.3/pekko-protobuf-v3_2.13-1.0.3.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-build-link/2.9.0/play-build-link-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-streams_2.13/2.9.0/play-streams_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-configuration_2.13/2.9.0/play-configuration_2.13-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/twirl-api_2.13/1.6.2/twirl-api_2.13-1.6.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-actor_2.13/2.6.21/akka-actor_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-actor-typed_2.13/2.6.21/akka-actor-typed_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-slf4j_2.13/2.6.21/akka-slf4j_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-serialization-jackson_2.13/2.6.21/akka-serialization-jackson_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-json-common_2.13/10.0.1/jwt-json-common_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-exceptions/3.0.9/play-exceptions-3.0.9.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/lz4/lz4-java/1.8.0/lz4-java-1.8.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/thoughtworks/paranamer/paranamer/2.8/paranamer-2.8.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/playframework/play-functional_2.13/3.0.5/play-functional_2.13-3.0.5.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/guava/listenablefuture/9999.0-empty-to-avoid-conflict-with-guava/listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/code/findbugs/jsr305/3.0.2/jsr305-3.0.2.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/google/j2objc/j2objc-annotations/2.8/j2objc-annotations-2.8.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/play/play-exceptions/2.9.0/play-exceptions-2.9.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-stream_2.13/2.6.21/akka-stream_2.13-2.6.21.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/modules/scala-java8-compat_2.13/1.0.0/scala-java8-compat_2.13-1.0.0.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/github/jwt-scala/jwt-core_2.13/10.0.1/jwt-core_2.13-10.0.1.jar:<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/com/typesafe/akka/akka-protobuf-v3_2.13/2.6.21/akka-protobuf-v3_2.13-2.6.21.jar -Xplugin-require:semanticdb -Yrangepos -Ymacro-expand:discard -Ycache-plugin-class-loader:last-modified -Ypresentation-any-thread

  last tree to typer: TypeTree(trait Action)
       tree position: line 90 of file://<WORKSPACE>/src/main/scala/controller/AuthController.scala
            tree tpe: play.api.mvc.Action[play.api.libs.json.JsValue]
              symbol: abstract trait Action in package mvc
   symbol definition: abstract trait Action[A <: <?>] extends EssentialAction (a ClassSymbol)
      symbol package: play.api.mvc
       symbol owners: trait Action
           call site: <none> in <none>

== Source file context for tree position ==

    87      * @return 
    88      * @note 一度
    89      */
    90     def signInGoogle = Action.async(parse.json) { request =>
    91         request.body.validate[GoogleAuthRequest].fold(
    92         _ => Future.successful(BadRequest("Invalid request")),
    93         data => {