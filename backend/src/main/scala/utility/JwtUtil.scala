package utility
import pdi.jwt.{Jwt, JwtAlgorithm, JwtClaim}
import play.api.Configuration
import java.time.Clock
import javax.inject._
import play.api.libs.json._
import struct.RoleEnum._
import utility.Constants
/*
 * ===========================================================
 *  ファイル名 : JwtUtil.scala
 *  概要       : JWT認証に必要な機能を提供する
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * JWT認証を管理するクラス
 * @param secretKey JWTの暗証鍵。本体はapplication.confと見せかけてdockerのルート.envファイル
 * @param expirationSeconds 有効期限〔秒〕
 * @note refreshトークンの仕組みはない、時間の自動延長の仕組みもない
 */
@Singleton
class JwtUtil @Inject() (config: Configuration, clock: Clock) {

    private val secretKey : String = config.get[String]("jwt.secret")
    private val expirationSeconds : Long = Constants.JwtExpirationSeconds

    /**
     * JWTトークンの発行に使うdto 
     */ 
    case class JwtContent(id: Long, role: Role) 
    implicit val jwtContent : Format[JwtContent] = Json.format[JwtContent]

    /**
     * @brief JWTのトークンを発行する
     * @param id userテーブルの主キー
     * @param role 権限
     * @return JWTトークン文字列
     */
    def createToken(id: Long, role: Role): String = {

        val tmpContent : String = Json.stringify(Json.toJson(JwtContent(id, role)))
        val claim = JwtClaim(
            content = tmpContent,
            issuedAt = Some(clock.instant.getEpochSecond),
            expiration = Some(clock.instant.getEpochSecond + expirationSeconds)
        )
        Jwt.encode(claim, secretKey, JwtAlgorithm.HS256)
    }

    /**
     * @brief JWTトークンを検証して中身を返す
     * @param token クライアントのJWT文字列
     * @return 正しくデコードできたらSome(JwtClaim), できなかったらNone
     */
    def decodeToken(token: String): Option[JwtClaim] = {
        Jwt.decode(token, secretKey, Seq(JwtAlgorithm.HS256)).toOption
    }
}