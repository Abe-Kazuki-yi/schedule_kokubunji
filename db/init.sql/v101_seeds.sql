-- seeds.sql（任意）
-- 講師
INSERT INTO teachers(name,is_admin) VALUES
 ('山田 太郎',false),
 ('鈴木 花子',false);

-- 生徒
INSERT INTO students(name,school,grade) VALUES
 ('佐藤 一郎','◯◯中学校','中2'),
 ('田中 二郎','◯◯中学校','中3'),
 ('高橋 三郎','△△高校','高1');

-- 授業（講師未定・英語）
INSERT INTO lessons(date,slot_no,type,subject,teacher_id)
VALUES ('2025-09-01',3,'通常','英語',NULL);

-- 受講者（lesson_id=1 前提。環境によってはIDが異なるため必要に応じて調整）
INSERT INTO lesson_students(lesson_id, student_id) VALUES (1,1),(1,2);
