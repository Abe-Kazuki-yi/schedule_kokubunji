CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  delete_at TIMESTAMP
);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'role') THEN
    CREATE TYPE role AS ENUM ('USER', 'ADMIN');
  END IF;
END
$$;

CREATE TABLE employees (
  id VARCHAR(9) PRIMARY KEY,
  department_id INTEGER REFERENCES department(id),
  last_name_kanji VARCHAR(50) NOT NULL,
  first_name_kanji VARCHAR(50) NOT NULL,
  last_name_kana VARCHAR(50) NOT NULL,
  first_name_kana VARCHAR(50) NOT NULL,
  password TEXT NOT NULL,
  mail VARCHAR(50),
  tel_number VARCHAR(20),
  status VARCHAR(20),
  role role NOT NULL DEFAULT 'USER',
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  delete_at TIMESTAMP
);

CREATE TABLE assignment_company (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  delete_at TIMESTAMP
);

CREATE TABLE shifts_registration_detail (
  id VARCHAR(9) NOT NULL, 
  date DATE NOT NULL,     
  assignment_id INTEGER NOT NULL, 
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  rest TIME NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  delete_at TIMESTAMP,
  PRIMARY KEY (id, date),
  FOREIGN KEY (assignment_id) REFERENCES assignment_company(id)
);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'shift_type') THEN
    CREATE TYPE shift_type AS ENUM ('normal', 'holiday', 'paid_leave', 'absence');
  END IF;
END
$$;

CREATE TABLE work_registration_detail (
  id VARCHAR(9) NOT NULL,        
  date DATE NOT NULL,        
  assignment_id INTEGER NOT NULL,  
  shift_type shift_type NOT NULL DEFAULT 'normal',
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  rest TIME NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  delete_at TIMESTAMP,
  PRIMARY KEY (id, date),
  FOREIGN KEY (assignment_id) REFERENCES assignment_company(id)
);

CREATE TABLE shifts_submission_detail (
  id SERIAL PRIMARY KEY, 
  employee_id VARCHAR(9) NOT NULL,       
  submitted_month DATE NOT NULL,       
  submitted_type SMALLINT NOT NULL,     
  status SMALLINT NOT NULL DEFAULT 1,    
  approver_id VARCHAR(9),                
  approved_at TIMESTAMP,          
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (approver_id) REFERENCES employees(id)
);

CREATE TABLE shifts_template (
  id SERIAL PRIMARY KEY,                      
  employee_id VARCHAR(9) NOT NULL,            
  name VARCHAR(50) NOT NULL,                  
  assignment_id INTEGER NOT NULL,            
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  rest TIME NOT NULL,
  pattern_type SMALLINT NOT NULL DEFAULT 0,  
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  delete_at TIMESTAMP,
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (assignment_id) REFERENCES assignment_company(id)
);