package controller

import javax.inject._
import play.api.mvc._
import org.slf4j.LoggerFactory

@Singleton
class HealthController @Inject()(cc: ControllerComponents)
  extends AbstractController(cc) {

  // backend 用（従来）
  private val logger =
    org.slf4j.LoggerFactory.getLogger(this.getClass)

  // frontend 用（★追加）
  private val frontendLogger =
    LoggerFactory.getLogger("frontend")

  def health = Action {
    logger.info("health endpoint called")
    frontendLogger.info("frontend logger test")
    Ok("OK")
  }
}
