DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    sales DECIMAL NOT NULL,
    legal DECIMAL NOT NULL,
    finance DECIMAL NOT NULL,
    engineering DECIMAL NOT NULL,
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id),
    REFERENCES departments(id)
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INTEGER NOT NULL,
    salary DECIMAL NOT NULL,
    manager_name INTEGER NULL,
    FOREIGN KEY (role_id),
    REFERENCES roles(id)
);



