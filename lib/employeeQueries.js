const db = require('../config/connection');

// view all employees
function selectedEmployees() {
    db.query(`SELECT employees.id AS employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
    FROM roles
    INNER JOIN employees ON roles.id = employees.role_id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees managers ON employees.manager_id = managers.id;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Showing all employees!');
        console.table(result);

        console.log('\n', 'loading...');
    });
}

function viewEmployeesByManager(manager_integer) {
    db.query(`SELECT employees.id AS employees_id, employees.first_name, employees.last_name
    FROM employees WHERE manager_id=?;`, [manager_integer], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Showing employees based on manager!');
        console.table(result);


        console.log('\n', 'loading...');
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
        selectedEmployees();

        console.log('\n', 'loading...');
    });
}

// update an employee's role
function updateEmployeeRole(id, role_id) {
    db.query(`UPDATE employees SET role_id=? WHERE id=?`, [role_id, id], (err, result) => {
        if (err) {
            console.log(err, 'Shit');
        }
        console.log('\n', 'Employee role updated!');

        console.log('\n', 'loading...');
    });
}
function updateEmployeeManager(id, manager_id) {
    db.query(`UPDATE employees SET manager_id=? WHERE id=?`, [manager_id, id], (err, result) => {
        if (err) {
            console.log(err, 'well fawk');
        }
        console.log('\n', 'Employee manager updated!');
        selectedEmployees();

        console.log('\n', 'loading...');
    });
}

module.exports = { selectedEmployees, viewEmployeesByManager, insertIntoEmployees, updateEmployeeRole, updateEmployeeManager };