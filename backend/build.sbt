lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    name := "hello-world",
    organization := "ch.epfl.scala",
    version := "1.0",
    scalaVersion := "2.13.17",
    libraryDependencies ++= Seq(
      guice,
      "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.2" % Test,
      "org.postgresql" % "postgresql" % "42.7.3",
      "com.typesafe.play" %% "play-slick" % "5.2.0",
      "com.typesafe.play" %% "play-slick-evolutions" % "5.2.0"
      // "org.scala-lang.modules" %% "scala-parser-combinators" % "2.3.0"
    ),
    Compile / unmanagedSourceDirectories += baseDirectory.value / "src" / "main" / "scala"
  )
