USE company;

INSERT INTO departments (department_name) VALUES ('Quality Control');

INSERT INTO
    roles (title, salary, department_id)
VALUES ('Procrastinator', 500, 5);

SELECT epmloyees.id
WHERE employee.id = manager_id
INSERT INTO
    employees (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ('Charlie', 'Houston', 13, NULL);

SELECT * FROM company.departments;

SELECT
    roles.id,
    roles.title,
    roles.salary,
    departments.department_name
FROM roles
    INNER JOIN departments ON roles.department_id = departments.id;

SELECT
    employees.id AS employee_id,
    employees.first_name,
    employees.last_name,
    roles.title,
    roles.salary,
    departments.department_name,
    CONCAT(
        managers.first_name,
        "",
        managers.last_name
    ) AS manager_name
FROM roles
    INNER JOIN employees ON roles.id = employees.role_id
    LEFT JOIN departments on roles.department_id = departments.id
    LEFT JOIN employees managers ON employees.manager_id = managers.id;

SELECT
    employees.id AS employees_id,
    employees.first_name,
    employees.last_name
FROM employees
WHERE manager_id = 4;

SELECT employees.id AS employees_id, employees.first_name, employees.last_name, emplyees.role_id
FROM employees
INNER JOIN employee_id = 3;