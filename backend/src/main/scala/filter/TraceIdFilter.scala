package filter
import javax.inject._
import play.api.mvc._
import org.slf4j.MDC
import scala.concurrent.{ExecutionContext, Future}
import java.util.UUID
/*
 * ===========================================================
 *  ファイル名 : TraceIdFilter.scala
 *  概要       : ログのトレースIDフィルター
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-12-27
 * ===========================================================
 */

@Singleton
class TraceIdFilter @Inject()(implicit ec: ExecutionContext)
  extends EssentialFilter {

  private val HeaderName = "X-Trace-Id"

  override def apply(next: EssentialAction): EssentialAction =
    EssentialAction { request =>
      val traceId =
        request.headers.get(HeaderName)
          .filter(_.nonEmpty)
          .getOrElse(UUID.randomUUID().toString)

      MDC.put("traceId", traceId)

      next(request).map { result =>
        MDC.clear()
        result
      }
    }
}