const inquirer = require('inquirer');
const db = require('./config/connection');
const depQueries = require('./lib/departmentQueries');
const empQueries = require('./lib/employeeQueries');
const rolQueries = require('./lib/roleQueries');
const results = require('./lib/results');
const deleteQueries = require('./lib/delete');

const Questions = {
    main: 'Which table would you like to interact with?',
    departments: [
        'What would you like to do?',
        'Enter the name of the new Department',
    ],
    roles: [
        'View roles',
    ],
    employees: [
        'View employees',
    ]
}

const QChoices = {
    main: [
        'Departments',
        'Roles',
        'Employees',
        'Quit',
    ],
    departments: [
        'View all departments',
        'View all employees by department',
        'View department budgets',
        'Add a new department',
        'Delete a department'
    ],
    roles: [
        'View all roles',
        'Add a role',
        'Delete a role',
    ],
    employees: [
        'View all employees',
        'View all employees by manager',
        'Add an employee',
        'Delete an employee',
        'Update an employee role',
        'Update employee assigned manager'
    ]
}

function init() {
    main();
}

function main() {
    setTimeout(function () {
        console.log('\n\n')
        inquirer.prompt([
            {
                type: 'list',
                message: Questions.main,
                name: 'choice',
                choices: QChoices.main
            }
        ]).then((value) => {
            switch (value.choice) {
                case QChoices.main[0]:
                    departments();
                    break;
                case QChoices.main[1]:
                    roles();
                    break;
                case QChoices.main[2]:
                    employees();
                    break;
                case QChoices.main[3]:
                    process.abort();
                    break;
                default:
                    console.log("error in switch case in main function in index.js file", value.name);
            }
        })
    }, 1000);
}

function departments() {
    inquirer.prompt([
        {
            type: 'list',
            message: Questions.departments[0],
            name: 'choice',
            choices: QChoices.departments
        }
    ]).then((value) => {
        switch (value.choice) {
            case QChoices.departments[0]:
                depQueries.selectedDepartment();
                main();
                break;
            case QChoices.departments[1]:
                employeesByDepartment();
                break;
            case QChoices.departments[2]:
                departmentBudget();
                break;
            case QChoices.departments[3]:
                addDepartment();
                break;
            case QChoices.departments[4]:
                deleteaDepartment();
                break;
            default:
                console.log('Error in switch case in departments function in index.js file', value.name);
        }
    });
}

function employeesByDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of a department to veiw employees',
            name: 'department_id'
        }
    ]).then((value) => {
        depQueries.viewEmployeesByDepartment(value.department_id);
        main();
    });
}

function departmentBudget() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter ID of deparment to view budget',
            name:'department_id',
        },
    ]).then((value) => {
        depQueries.departmentBudgetCalc(value.department_id);
        main();
    })
}

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        message: Questions.departments[1],
        name: 'choice',
    }).then((value) => {
        depQueries.insertIntoDepartments(value.choice);
        main();
    });
}

function deleteaDepartment() {
    inquirer.prompt({
        type: 'input',
        message: 'Enter the id of a department to delete',
        name: 'department_delete'
    }).then((value) => {
        deleteQueries.deleteDepartment(value.department_delete);
        main();
    });
}

function roles() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: QChoices.roles
        }
    ]).then((value) => {
        switch (value.choice) {
            case QChoices.roles[0]:
                rolQueries.selectedRoles();
                main();
                break;
            case QChoices.roles[1]:
                addRole();
                break;
            case QChoices.roles[2]:
                deleteaRole();
                break;
            default:
                console.log('error in switch case in roles function in index.js file', value.name);
        }
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the title of new role',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the yearly salary of new role',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter the ID of the department the new role belongs to',
            name: 'department_id',
        }
    ]).then((value) => {
        rolQueries.insertIntoRoles(value.title, value.salary, value.department_id);
        main();
    });
}

function deleteaRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of a role to delete',
            name:'role_delete',
        },
    ]).then((value) => {
        deleteQueries.deleteRole(value.role_delete);
        main();
    })
}

function employees() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: QChoices.employees
        }
    ]).then((value) => {
        switch (value.choice) {
            case QChoices.employees[0]:
                empQueries.selectedEmployees();
                main();
                break;
            case QChoices.employees[1]:
                employeesByManager();
                break;
            case QChoices.employees[2]:
                addEmployee();
                break;
            case QChoices.employees[3]:
                deleteaEmployee();
                break;
            case QChoices.employees[4]:
                employeeUpdateRole();
                break;
            case QChoices.employees[5]:
                employeeUpdateManager();
                break;
            default:
                console.log('error in the switch case in employee function in index.js file', value.name);
        }
    });
}

function employeesByManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of a manager to veiw their employees',
            name: 'manager_id'
        }
    ]).then((value) => {
        empQueries.viewEmployeesByManager(value.manager_id);
        main();
    });
}

// add an employee
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the first name of new employee',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'Enter the last name of new employee',
            name: 'last_name',
        },
        {
            type: 'input',
            message: 'Enter the ID of a role to assign to new employee',
            name: 'role_id',
        },
        {
            type: 'input',
            message: 'Enter the ID of a manager to assign to new employee',
            name: 'manager_id'
        }
    ]).then((value) => {
        empQueries.insertIntoEmployees(value.first_name, value.last_name, value.role_id, value.manager_id);
        main();
    });
}

function deleteaEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of an employee to delete',
            name: 'employee_delete'
        }
    ]).then((value) => {
        deleteQueries.deleteEmployee(value.employee_delete);
        main();
    });
}
//update employee
function employeeUpdateRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of a employee to update',
            name: 'employee_id'
        },
        {
            type: 'input',
            message: 'Enter the ID of a new role to assign to employee',
            name: 'role'
        },
    ]).then((value) => {
        empQueries.updateEmployeeRole(value.employee_id, value.role);
        results.showChangesRole(value.employee_id);
        main();
    });
}

function employeeUpdateManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of employee to reassign manager',
            name: 'employee_id'
        },
        {
            type: 'input',
            message: 'Enter the ID of a new manager to assign to employee',
            name: 'manager'
        }
    ]).then((value) => {
        empQueries.updateEmployeeManager(value.employee_id, value.manager);
        results.showChangesManager(value.employee_id);
        main();
    });
}
init();