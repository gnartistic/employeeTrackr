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
        'View all roles',
        'View all employees',
        'Quit',
    ],
    roles: [
        'View all roles',
        'Add a role'
    ],
    employee: [
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
                console.log("error in switch case for main in index.js file", value.name);
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
                console.log('Error in switch case for departments in index.js file', value.name);
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

init();