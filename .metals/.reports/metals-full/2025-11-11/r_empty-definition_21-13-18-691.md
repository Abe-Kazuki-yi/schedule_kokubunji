error id: file://<WORKSPACE>/backend/src/main/scala/enum/Role.scala:`<none>`.
file://<WORKSPACE>/backend/src/main/scala/enum/Role.scala
empty definition using pc, found symbol in pc: `<none>`.
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 679
uri: file://<WORKSPACE>/backend/src/main/scala/enum/Role.scala
text:
```scala
package enum
import play.api.libs.json._
import slick.jdbc.PostgresProfile.api._ 
/*
 * ===========================================================
 *  ファイル名 : Role.scala
 *  概要       : ユーザの権限の種類用のEnum
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

//このファイル内でしか継承できないtraitを宣言
sealed trait Role

//Role型のオブジェクトでEnumとする
case object Student extends Role
case object Teacher extends Role
case object Admin extends Role

/**
 * Roleの内容をStringに変換するimplicit。jsonやdbでの受け渡しで使用
 */
object RoleMappings {
    //第一引数scala→String, 第二引数String→scala
    implicit val roleColumnType: BaseColumnType[Role] = MappedColumnTy@@pe.base[Role, String](
        {
            case Student => "Student"
            case Teacher => "Teacher"
            case Admin   => "Admin"
        },
        {
            case "Student" => Student
            case "Teacher" => Teacher
            case "Admin"   => Admin
        }
  )

    implicit val roleFormat: Format[Role] = new Format[Role] {
        def writes(role: Role): JsValue = JsString(role match {
        case Student => "Student"
        case Teacher => "Teacher"
        case Admin   => "Admin"
        })

    def reads(json: JsValue): JsResult[Role] = json match {
        case JsString("Student") => JsSuccess(Student)
        case JsString("Teacher") => JsSuccess(Teacher)
        case JsString("Admin")   => JsSuccess(Admin)
        case _ => JsError("Invalid Role")
        }
  }
}
```


#### Short summary: 

empty definition using pc, found symbol in pc: `<none>`.