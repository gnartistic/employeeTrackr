const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.DB_NAME
    },
    console.log(`Connected to the company database!`)
);

function selectedDepartment() {
    db.query(`SELECT * FROM company.departments;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
        console.table(result);
    });
}

function insertIntoDepartments(string) {
    db.query(`INSERT INTO departments (department_name) VALUES (?);`, string, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'New department added.');
        console.table(result);
    });
}

// view all roles
function selectedRoles() {
    db.query(`SELECT roles.id, roles.title, roles.salary, departments.department_name
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id;`, (err, result) => {
        if (err) {
            console.log(err, 'ah shit');
        }
        console.log('\n', 'You selected roles!');
        console.table(result);
    });
}

// add a role
function insertIntoRoles(string, decimal, integer) {
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`, [string, decimal, integer], (err, result) => {
        if (err) {
            console.log(err, 'bob saget!');
        }
        console.log('\n', 'New role added!');
        console.table(result);
    });
}

// view all employees
function selectedEmployees() {
    db.query(`SELECT employees.id as employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
    FROM roles
    INNER JOIN employees ON roles.id = employees.role_id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees managers ON employees.manager_id = managers.id;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'You selected Employees!');
        console.table(result);
    });
}

function viewEmployeesByManager(manager_integer) {
    db.query(`SELECT employees.id AS employees_id, employees.first_name, employees.last_name
    FROM employees WHERE manager_id=?;`, [manager_integer], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'You selected Employees!');
        console.table(result);
    });
}

// add a new employee
// should look up the manager string and convert it into a integer for id
function insertIntoEmployees(first_string, string, integer, manager_integer) {
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`, [first_string, string, integer, manager_integer], (err, result) => {
        if (err) {
            console.log(err, 'Get it together!');
        }
        console.log('\n', 'New employee added!');
    });
}

// update an employee's role
function updateEmployees(id, role_id) {
    db.query(`UPDATE employees SET role_id=? WHERE id=?`, [role_id, id], (err, result) => {
        if (err) {
            console.log(err, 'Shit');
        }
        console.log('\n', 'Employee role updated!');
        console.table(result);
    });
}


module.exports = {
    selectedDepartment, insertIntoDepartments, selectedRoles, insertIntoRoles,
    selectedEmployees, insertIntoEmployees, updateEmployees, viewEmployeesByManager,
}