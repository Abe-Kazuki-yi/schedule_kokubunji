package security
import play.api.mvc._
import scala.concurrent.{ExecutionContext, Future}
import javax.inject._
import utility.JwtUtil

/*
 * ===========================================================
 *  ファイル名 : SecuredAction.scala
 *  概要       : JWTをチェックするカスタムアクション
 *  使い方     :ログイン後に処理したいコントーラにはSecuredAction.scalaをDIする。
 *              ログイン時にJWT認証を行い、定められた時間内であればトークンが有効。
 * 　　　　　　　ログインしていなかったり、時間を越えていたらトークンは無効。frontに401のエラーを返す。
 * @note カスタムアクション←とは？
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * @super ActionBuilderImpl:httpのリクエストを受け取ったときにコントローラよりも前に行う処理の実現クラス
 */
class SecuredAction @Inject()(parser: BodyParsers.Default, jwtUtil: JwtUtil)
                             (implicit ec: ExecutionContext)
    extends ActionBuilderImpl(parser) {

    /**
     * @brief リクエストの処理前に呼ばれる。トークンが有効か判断する
     * @param request frontからのリクエスト
     * @param block 本来行いたい処理
     * @return 200:本来行いたい処理の返り値、401:JWT認証失敗。本来の処理で発生する例外の番号を返す可能性もあり
     */
    override def invokeBlock[A](request: Request[A], block: Request[A] => Future[Result]): Future[Result] = {
        //リクエストヘッダに"Authorization"があるかを確認
        //もし存在する場合、"Bearer "から始まっていたらその部分を切り詰める。
        val maybeToken : Option[String] = request.headers.get("Authorization").flatMap { header =>
            if (header.startsWith("Bearer ")) {
                Some(header.substring(7))
            }else{
                None
            }
        }

        //jwtUtil.decodeTokenの引数に渡し、JWT認証が成功したら本来の処理blockを実行
        //それ以外なら401を返す
        maybeToken.flatMap(jwtUtil.decodeToken) match {
            case Some(_) => block(request)
            case None    => Future.successful(Results.Unauthorized("Invalid or missing token"))
        }
    }
}
