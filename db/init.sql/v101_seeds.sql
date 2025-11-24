-- seeds.sql（任意）
-- Users
INSERT INTO users(username, password, role) VALUES
 ('admin', '$2a$10$WCuIuTMIYnXQI13UckuHM.1x6Rso.JpgdMUMSigxTC6FmVH0KM/1K', 'admin'),
 ('teacher', '$2a$10$SO28RLgO/R0sVcquGPmGvugS2CIt0BV19RWEGVKgMXlo5sP3IF4l.', 'teacher'),
 ('student', '$2a$10$oFa6Wa8ep.1JLPNsofFN6uxSk6aHx5N13R5ber.S/nA3PSh0t4CI.', 'student');

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
