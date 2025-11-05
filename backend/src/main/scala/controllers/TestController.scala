package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import models._
import slick.jdbc.PostgresProfile.api._
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class TestController @Inject() (
  cc: ControllerComponents,
  protected val dbConfigProvider: play.api.db.slick.DatabaseConfigProvider
)(implicit ec: ExecutionContext)
  extends AbstractController(cc) {

  private val db = dbConfigProvider.get.db
  private val students = StudentTable.students

  implicit val studentWrites: OWrites[Student] = Json.writes[Student]

  def getStudents() = Action.async {
    val query = students.result
    db.run(query).map { result =>
      Ok(Json.toJson(result))
    }
  }
}
