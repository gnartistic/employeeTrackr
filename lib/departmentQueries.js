const db = require('../config/connection');

function selectedDepartment() {
    db.query(`SELECT * FROM company.departments;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n');
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

module.exports = { selectedDepartment, insertIntoDepartments };