lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    name := "hello-world",
    organization := "ch.epfl.scala",
    version := "1.0",
    scalaVersion := "2.13.17",
    libraryDependencies ++= Seq(
      guice,
      // Play Framework
      "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.2" % Test,

      // postgreSQL
      "org.postgresql" % "postgresql" % "42.7.3",

      // Slick (Play FrameworkとPostgreの連携)
      "com.typesafe.play" %% "play-slick" % "5.2.0",
      "com.typesafe.play" %% "play-slick-evolutions" % "5.2.0",
      "com.typesafe.slick" %% "slick" % "3.4.1",
      "com.typesafe.slick" %% "slick-hikaricp" % "3.4.1",

      // Play JSON
      "com.typesafe.play" %% "play-json" % "2.9.4",

      // passwordのハッシュ化
      "org.mindrot" % "jbcrypt" % "0.4",

      // JWT認証
      "com.github.jwt-scala" %% "jwt-play" % "10.0.1",

      // ログ関係
      "org.slf4j" % "slf4j-api" % "2.0.13",
      "ch.qos.logback" % "logback-classic" % "1.5.6",
    ),
    resolvers ++= Seq(
      "Lightbend Repository" at "https://repo.lightbend.com/lightbend/maven-releases/",
      "Playframework Repository" at "https://repo.playframework.com/"
    ),
    Compile / unmanagedSourceDirectories += baseDirectory.value / "src" / "main" / "scala"
  )
