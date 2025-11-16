error id: file://<WORKSPACE>/backend/build.sbt:`<error>`#`<error>`.
file://<WORKSPACE>/backend/build.sbt
empty definition using pc, found symbol in pc: 
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -baseDirectory.
	 -scala/Predef.baseDirectory.
offset: 1024
uri: file://<WORKSPACE>/backend/build.sbt
text:
```scala
lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    name := "hello-world",
    organization := "ch.epfl.scala",
    version := "1.0",
    scalaVersion := "2.13.17",
    libraryDependencies ++= Seq(
      guice,
      //Play Framework
      "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.2" % Test,

      //postgreSQL
      "org.postgresql" % "postgresql" % "42.7.3",

      //Slick(Play FrameworkとPostgreの連携)
      "com.typesafe.play" %% "play-slick" % "5.2.0",
      "com.typesafe.play" %% "play-slick-evolutions" % "5.2.0",
      "com.typesafe.slick" %% "slick" % "3.3.3",          
      "com.typesafe.slick" %% "slick-hikaricp" % "3.3.3", 

      // Play JSON
      "com.typesafe.play" %% "play-json" % "2.9.4",
      //passwordのハッシュ化
      "org.mindrot" % "jbcrypt" % "0.4",
      
      //JWT認証
      "com.github.jwt-scala" %% "jwt-play" % "10.0.1"
      // "org.scala-lang.modules" %% "scala-parser-combinators" % "2.3.0"
    ),
    Compile / unmanagedSourceDirectories += ba@@seDirectory.value / "src" / "main" / "scala"
  )

```


#### Short summary: 

empty definition using pc, found symbol in pc: 