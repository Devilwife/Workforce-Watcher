-- Insert data into tables
INSERT INTO departments (id, name) 
VALUE (001, 'Serial Primary Key'),
      (002, 'VARCHAR(100)'),

INSERT INTO roles (id, title, salary, department_id) 
VALUES (001, 'Serial Primary Key', 100000, 001),
       (002, 'VARCHAR(100) UNIQUE NOT NULL', 80000, 002),
       (003, 'DECIMAL NOT NULL', 70000, 001),
       (004, 'INTEGER NOT NULL', 60000, 002),

INSERT INTO employees (id, first_name, last_name, role_id, manager_name)
VALUES (001, 'John', 'Doe', '501', 'NULL'),
       (002, 'Jane', 'Smith', '502', 'NULL'),
       (003, 'Michael', 'Johnson', '503', 'NULL');
       (004, 'Sara', 'Wilson', '504', 'NULL');
       (005, 'Chris', 'Brown', '505', 'NULL');
       (006, 'Amanda', 'Jones', '506', 'NULL');
       (007, 'David', 'Davis', '507', 'NULL');

