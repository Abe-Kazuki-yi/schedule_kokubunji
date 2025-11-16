#過去のバージョン
#FROM sbtscala/scala-sbt:eclipse-temurin-jammy-17.0.10_7_1.9.9_2.13.12

FROM sbtscala/scala-sbt:eclipse-temurin-17.0.15_6_1.11.7_2.13.17

WORKDIR /app

COPY . .

RUN sbt compile

#過去のバージョン
#CMD ["sbt", "run"]

CMD ["sbt", "-Dsbt.server.forcestart=true", "-Dsbt.watch.mode=polling", "~run"]