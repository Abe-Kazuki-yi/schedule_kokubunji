package struct
import play.api.libs.json._
import slick.jdbc.PostgresProfile.api._ 
/*
 * ===========================================================
 *  ファイル名 : AccountType.scala
 *  概要       : ログインの種類(googleかmail)のEnum
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-13
 * ===========================================================
 */
object AccountTypeEnum {
    //このファイル内でしか継承できないtraitを宣言
    sealed trait AccountType

    //Role型のオブジェクトでEnumとする
    case object Google extends AccountType
    case object Password extends AccountType

    /**
    * Roleの内容をStringに変換するimplicit。jsonやdbでの受け渡しで使用
    */
    //第一引数scala→String, 第二引数String→scala
    implicit val accountTypeColumnType: BaseColumnType[AccountType] = MappedColumnType.base[AccountType, String](
        {
            case Google => "Google"
            case Password => "Password"
        },
        {
            case "Google" => Google
            case "Password" => Password
        }
  )

    implicit val accountTypeFormat: Format[AccountType] = new Format[AccountType] {
        def writes(accountType: AccountType): JsValue = JsString(accountType match {
        case Google => "Google"
        case Password => "Password"
        })

    def reads(json: JsValue): JsResult[AccountType] = json match {
        case JsString("Google") => JsSuccess(Google)
        case JsString("Password") => JsSuccess(Password)
        case _ => JsError("Invalid AccountType")
        }
  }
}