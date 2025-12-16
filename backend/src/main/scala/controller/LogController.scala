package controller

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import play.api.Logging

@Singleton
class LogController @Inject()(cc: ControllerComponents)
  extends AbstractController(cc) {

  private val frontendLogger =
    org.slf4j.LoggerFactory.getLogger("frontend")

  def frontendLog: Action[JsValue] = Action(parse.json) { request =>
    frontendLogger.info(request.body.toString())
    Ok
  }
}
