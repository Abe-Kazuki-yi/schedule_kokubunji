package controller

import javax.inject._
import play.api.mvc._
import play.api.Logger

@Singleton
class HealthController @Inject()(cc: ControllerComponents)
  extends AbstractController(cc) {

  private val logger = Logger(this.getClass)

  def health = Action {
    logger.info("health endpoint called")
    Ok("OK")
  }
}
