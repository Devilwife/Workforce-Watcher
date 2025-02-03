SELECT *
FROM employees
JOIN ROLE ON employye.role_id = role.id;

SELECT *
FROM employees
JOIN ROLE ON employye.role_id = role.id
WHERE role.title = 'Engineer';

SELECT *
FROM employees
JOIN ROLE ON employye.role_id = role.id
WHERE role.title = 'Engineer'
AND role.salary > 100000;

SELECT *
FROM employees
JOIN ROLE ON employye.role_id = role.id
WHERE role.title = 'Engineer'
AND role.salary > 100000
AND employee.manager_id = 1;

SELECT *
FROM employees
JOIN ROLE ON employye.role_id = role.id
WHERE role.title = 'Engineer'
AND role.salary > 100000
AND employee.manager_id = 1
AND employee.first_name = 'John';

SELECT *
FROM employees
JOIN ROLE ON employye.role_id = role.id
WHERE role.title = 'Engineer'
AND role.salary > 100000
AND employee.manager_id = 1
AND employee.first_name = 'John'
AND employee.last_name = 'Doe';

