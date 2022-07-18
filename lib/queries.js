const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Maegan1121!',
        database: 'company'
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
        console.log('\n');
        console.table('New department added.');
    });
}

module.exports = { selectedDepartment, insertIntoDepartments}