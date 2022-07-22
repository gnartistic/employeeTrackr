const inquirer = require('inquirer');
const queries = require('./lib/queries.js');

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
        'Add a new department',
    ],
    roles: [
        'View all roles',
        'Add a role'
    ],
    employees: [
        'View all employees',
        'Add an employee',
        'Update an employee role',
    ]
}

function init() {
    main();
}

function main() {
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
    });
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
                queries.selectedDepartment();
                main();
                break;
            case QChoices.departments[1]:
                addDepartment();
                break;
            default:
                console.log('Error in switch case in departments function in index.js file', value.name);
        }
    });
}

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        message: Questions.departments[1],
        name: 'choice',
    }).then((value) => {
        queries.insertIntoDepartments(value.choice);
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
                queries.selectedRoles();
                main();
                break;
            case QChoices.roles[1]:
                addRole();
                break;
            case QChoices.roles[2]:
                updateRole();
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
            message: 'Enter the title of the role',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the yearly salary for this role',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter the department ID this role belongs to',
            name: 'department_id',
        }
    ]).then((value) => {
        queries.insertIntoRoles(value.title, value.salary, value.department_id);
        main();
    });
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
                queries.selectedEmployees();
                main();
                break;
            case QChoices.employees[1]:
                addEmployee();
                break;
            case QChoices.employees[2]:
                employeeUpdated();
                break;
            default:
                console.log('error in the switch case in employee function in index.js file', value.name);
        }
    });
}

// add an employee
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the title of the employee',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the yearly salary of this employee',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'Enter the department ID this employee belong to',
            name: 'department_id',
        },
        {
            type: 'input',
            message: 'Enter the ID of the manager they work under',
            name: 'manager_id'
        }
    ]).then((value) => {
        queries.insertIntoEmployees(value.title, value.salary, value.department_id, value.manager_id);
        main();
    });
}

//update employee
function employeeUpdated() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the ID of the employee you want to update',
            name: 'employee_id'
        },
        {
            type: 'input',
            message: 'Enter their new role',
            name: 'role'
        },
    ]).then((value) => {
        queries.updateEmployees(value.employee_id, value.role);
        main();
    });

}
init();