-- Create tables
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    hire_date DATE
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employee_departments (
    employee_id INT,
    department_id INT,
    PRIMARY KEY (employee_id, department_id),
    FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Insert data into tables
INSERT INTO employees (first_name, last_name, email, hire_date) VALUES
('John', 'Doe', 'john.doe@example.com', '2021-01-15'),
('Jane', 'Smith', 'jane.smith@example.com', '2020-03-22'),
('Michael', 'Johnson', 'michael.johnson@example.com', '2019-07-30');

INSERT INTO departments (name) VALUES
('Human Resources'),
('Engineering'),
('Marketing');

INSERT INTO employee_departments (employee_id, department_id) VALUES
(1, 2),
(2, 1),
(3, 3);