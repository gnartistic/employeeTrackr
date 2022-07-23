const db = require('../config/connection');

function selectedDepartment() {
    db.query(`SELECT * FROM company.departments;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Showing all departments!');
        console.table(result);

        console.log('\n', 'loading...');
    });
}

function insertIntoDepartments(string) {
    db.query(`INSERT INTO departments (department_name) VALUES (?);`, string, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'New department added!');
        selectedDepartment();
    });
}

function viewEmployeesByDepartment(department_id) {
    db.query(`SELECT employees.id AS employees_id, employees.first_name, employees.last_name, departments.id AS department_id, departments.department_name as department_name
    FROM departments
    LEFT JOIN employees ON departments.id = employees.department_id
    WHERE departments.id=?;`, [department_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Showing all employees in this department!');
        console.table(result);

        console.log('\n', 'loading...');
    });
}

function departmentBudgetCalc(department_id) {
    db.query(`SELECT SUM(salary) FROM roles WHERE department_id=?;`, [department_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Calculating in progress!');
        console.table(result);

        console.log('loading...');
    })
}
module.exports = { selectedDepartment, insertIntoDepartments, viewEmployeesByDepartment, departmentBudgetCalc };