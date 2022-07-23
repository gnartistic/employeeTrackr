const db = require('../config/connection');

function showChangesRole(employee_id) {
    db.query(`SELECT employees.id AS employee_id, employees.first_name, employees.last_name, roles.id AS role_id, roles.title
    FROM roles
    INNER JOIN employees ON roles.id = employees.role_id
    WHERE employees.id=?;`, [employee_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
}

function showChangesManager(employee_id) {
    db.query(`SELECT employees.id AS employee_id, employees.first_name, employees.last_name, employees.manager_id, CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
    FROM employees
    LEFT JOIN employees managers ON employees.manager_id = managers.id
    WHERE employees.id=?;`, [employee_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
}

module.exports = { showChangesRole, showChangesManager };