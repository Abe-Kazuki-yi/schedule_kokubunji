-- V001__init_core.sql
-- 初期DDL（PostgreSQL）
CREATE TABLE teachers (
  id       BIGSERIAL PRIMARY KEY,
  name     VARCHAR(50) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE students (
  id     BIGSERIAL PRIMARY KEY,
  name   VARCHAR(50) NOT NULL,
  school VARCHAR(80),
  grade  VARCHAR(20)
);

CREATE TABLE lessons (
  id         BIGSERIAL PRIMARY KEY,
  date       DATE        NOT NULL,
  slot_no    SMALLINT    NOT NULL CHECK (slot_no BETWEEN 1 AND 6),
  type       VARCHAR(20) NOT NULL CHECK (type IN ('通常','補習','講習','テスト対策','その他')),
  subject    VARCHAR(50) NOT NULL CHECK (btrim(subject) <> ''),
  teacher_id BIGINT REFERENCES teachers(id)  -- NULL可
);

CREATE TABLE lesson_students (
  lesson_id  BIGINT NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  student_id BIGINT NOT NULL REFERENCES students(id),
  PRIMARY KEY (lesson_id, student_id)
);

CREATE INDEX idx_lessons_date_slot     ON lessons(date, slot_no);
CREATE INDEX idx_lessons_teacher_date  ON lessons(teacher_id, date);
CREATE INDEX idx_ls_student            ON lesson_students(student_id);
