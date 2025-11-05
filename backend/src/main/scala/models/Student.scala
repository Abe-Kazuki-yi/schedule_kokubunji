package models

import slick.jdbc.PostgresProfile.api._

case class Student(
  id: Long,
  name: String,
  school: String,
  grade: String
)

class StudentTable(tag: Tag) extends Table[Student](tag, "students") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def name = column[String]("name")
  def school = column[String]("school")
  def grade = column[String]("grade")

  def * = (id, name, school, grade) <> ((Student.apply _).tupled, Student.unapply)
}

object StudentTable {
  val students = TableQuery[StudentTable]
}
