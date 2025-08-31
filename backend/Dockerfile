FROM hseeberger/scala-sbt:11.0.17_1.9.7_2.13.12

WORKDIR /app

COPY . .

RUN sbt compile

CMD ["sbt", "run"]

