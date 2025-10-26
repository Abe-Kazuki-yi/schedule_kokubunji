package controllers

import javax.inject._
import play.api.mvc._

@Singleton
class TestController @Inject() (val controllerComponents: ControllerComponents) extends BaseController {

  def hello() = Action {
    Ok("Hello, World!")
  }
}
