-- V002__subject_is_core5.sql
-- lessons.subject を5科目の固定集合に制限
ALTER TABLE lessons
  ADD CONSTRAINT CK_lessons_subject_core5
  CHECK (subject IN ('国語','数学','英語','理科','社会'));