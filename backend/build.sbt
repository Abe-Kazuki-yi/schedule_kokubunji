lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    name := "hello-world",
    organization := "ch.epfl.scala",
    version := "1.0",
    scalaVersion := "2.13.17",
    libraryDependencies ++= Seq(
      guice,
      "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.2" % Test
      // "org.scala-lang.modules" %% "scala-parser-combinators" % "2.3.0"
    ),
    Compile / unmanagedSourceDirectories += baseDirectory.value / "src" / "main" / "scala"
  )
