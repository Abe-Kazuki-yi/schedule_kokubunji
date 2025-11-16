error id: file://<WORKSPACE>/src/main/scala/struct/AccountType.scala:local7
file://<WORKSPACE>/src/main/scala/struct/AccountType.scala
empty definition using pc, found symbol in pc: 
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -play/api/libs/json/role.
	 -play/api/libs/json/role#
	 -play/api/libs/json/role().
	 -slick/jdbc/PostgresProfile.api.role.
	 -slick/jdbc/PostgresProfile.api.role#
	 -slick/jdbc/PostgresProfile.api.role().
	 -role.
	 -role#
	 -role().
	 -scala/Predef.role.
	 -scala/Predef.role#
	 -scala/Predef.role().
offset: 1085
uri: file://<WORKSPACE>/src/main/scala/struct/AccountType.scala
text:
```scala
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
    case object Email extends AccountType

    /**
    * Roleの内容をStringに変換するimplicit。jsonやdbでの受け渡しで使用
    */
    //第一引数scala→String, 第二引数String→scala
    implicit val roleColumnType: BaseColumnType[AccountType] = MappedColumnType.base[AccountType, String](
        {
            case Google => "Google"
            case Email => "Email"
        },
        {
            case "Google" => Google
            case "Email" => Email
        }
  )

    implicit val roleFormat: Format[AccountType] = new Format[AccountType] {
        def writes(accountType: AccountType): JsValue = JsString(acc@@ountType match {
        case Google => "Google"
        case Email => "Email"
        })

    def reads(json: JsValue): JsResult[AccountType] = json match {
        case JsString("Google") => JsSuccess(Google)
        case JsString("Email") => JsSuccess(Email)
        case _ => JsError("Invalid AccountType")
        }
  }
}
```


#### Short summary: 

empty definition using pc, found symbol in pc: 