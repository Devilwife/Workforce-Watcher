DO $$

DECLARE 

BEGIN

INSERT INTO departments (id, name) 
VALUES (1, 'Sales'),
       (2, 'Legal'),
       (3, 'Finance'),
       (4, 'Engineering');

INSERT INTO roles (id, title, salary, department_id) 
VALUES (102, 'Lead', 100000, 1),
       (205, 'Engineer', 80000, 4),
       (303, 'Analyst', 70000, 3),
       (405, 'Lawyer', 60000, 2);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1001, 'John', 'Doe', 102, NULL),
       (2002, 'Jane', 'Smith', 205, 1001),
       (3003, 'Michael', 'Johnson', 303, 1001),
       (4004, 'Emily', 'Jones', 405, 1001);

RAISE NOTICE 'Database seeded successfully';

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Database seeding failed: %:', SQLERRM;
        ROLLBACK;

END $$;