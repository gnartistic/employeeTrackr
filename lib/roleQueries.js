const db = require('../config/connection');
// view all roles
function selectedRoles() {
    db.query(`SELECT roles.id, roles.title, roles.salary, departments.department_name
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id;`, (err, result) => {
        if (err) {
            console.log(err, 'ah shit');
        }
        console.log('\n', 'showing all roles!');
        console.table(result);

        console.log('\n', 'loading...');
    });
}

// add a role
function insertIntoRoles(string, decimal, integer) {
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`, [string, decimal, integer], (err, result) => {
        if (err) {
            console.log(err, 'bob saget!');
        }
        console.log('\n', 'New role added!');
        selectedRoles();

        console.log('\n', 'loading...');
    });
}

module.exports = { selectedRoles, insertIntoRoles };