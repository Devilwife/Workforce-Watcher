-- Insert data into tables
INSERT INTO departments (id, name) 
VALUES (1, 'Human Resources'),
       (2, 'Engineering');

INSERT INTO roles (id, title, salary, department_id) 
VALUES (1, 'Manager', 100000, 1),
       (2, 'Engineer', 80000, 2),
       (3, 'Analyst', 70000, 1),
       (4, 'Technician', 60000, 2);

INSERT INTO employees (id, first_name, last_name, role_id, manager_name)
VALUES (1, 'John', 'Doe', 1, NULL),
       (2, 'Jane', 'Smith', 2, NULL),
       (3, 'Michael', 'Johnson', 3, NULL),
       (4, 'Sara', 'Wilson', 4, NULL),
       (5, 'Chris', 'Brown', 1, NULL),
       (6, 'Amanda', 'Jones', 2, NULL),
       (7, 'David', 'Davis', 3, NULL);
