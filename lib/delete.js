const db = require('../config/connection');
const depQueries = require('./departmentQueries');
const empQueries = require('./employeeQueries');
const rolQueries = require('./roleQueries');

function deleteDepartment(department_id) {
    db.query(`DELETE FROM departments WHERE departments.id=?;`, [department_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Department deleted successfully!');
        depQueries.selectedDepartment();
    });
}

function deleteRole(role_id) {
    db.query(`DELETE FROM roles WHERE roles.id=?;`, [role_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Role deleted successfully!');
        rolQueries.selectedRoles();
    });
}

function deleteEmployee(employee_id) {
    db.query(`DELETE FROM employees WHERE employees.id=?;`, [employee_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('\n', 'Employee deleted successfully!');
        empQueries.selectedEmployees();
    });
}

module.exports = { deleteDepartment, deleteEmployee, deleteRole };