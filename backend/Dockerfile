FROM sbtscala/scala-sbt:eclipse-temurin-17.0.15_6_1.11.7_2.13.17
#過去のバージョン
#FROM sbtscala/scala-sbt:eclipse-temurin-jammy-17.0.10_7_1.9.9_2.13.12

WORKDIR /app

COPY . .

RUN sbt compile

CMD ["sbt", "run"]

