import inquirer from 'inquirer';
import {pool, connectToDb} from './db/connection.js';

async function viewEmployees() {
    try {
        const result = await pool.query('SELECT * FROM employees');
        console.table(result.rows);
    } catch (error) {
        console.error('Error viewing employees:', error);
    }
}

async function addEmployee() {
    try {
        const { firstName, lastName } = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the first name of the employee you would like to add:',
                validate: (input) => {
                    return input.trim() !== '' || 'First name cannot be empty.';
                }
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the last name of the employee you would like to add:',
                validate: (input) => {
                    return input.trim() !== '' || 'Last name cannot be empty.';
                }
            },
        ]);

        // Fetch existing employees
        const employees = await pool.query('SELECT * FROM employee');

        // Select an employee for some role (if applicable)
        const { employee } = await inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'Select the employee for the role:',
                choices: [
                    ...employees.rows.map((employee) => ({
                        name: `${employee.first_name} ${employee.last_name}`,
                        value: employee.id
                    })),
                    { name: 'None', value: null } // Option to select none
                ],
            }
        ]);

        // Insert the new employee into the database
        await pool.query('INSERT INTO employee (first_name, last_name) VALUES ($1, $2)', [firstName, lastName]);

        console.log(`Employee ${firstName} ${lastName} added successfully.`);

        // If an employee was selected for a role, you can perform additional logic here
        if (employee) {
            console.log(`You selected employee ID: ${employee} for a role.`);
            // Additional logic for assigning a role can be inserted here.
        }
    } catch (error) {
        console.error('Error adding employee:', error);
    }
}

async function updateEmployeeRole() {
    try {
        const employees = await pool.query('SELECT * FROM employee');
        const roles = await pool.query('SELECT * FROM role');
        const {employeeId, roleId} = await inquirer.prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: 'Select the employee whose role you would like to update:',
                choices: employees.rows.map((employee) => ({name: `${employee.first_name} ${employee.last_name}`, value: employee.id})),
            },
            {
                type: 'list',
                name: 'roleId',
                message: 'Select the new role for the employee:',
                choices: roles.rows.map((role) => ({name: role.title, value: role.id})),
            },
        ]);
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
        console.log(`Employee role updated successfully.`);
    } catch (error) {
        console.error('Error updating employee role:', error);
    }
}

async function viewRoles() {
    try {
        const result = await pool.query('SELECT * FROM roles');
        console.table(result.rows);
    } catch (error) {
        console.error('Error viewing roles:', error);
    }
}

async function addRole() {
    const {roleName} = await inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'Enter the name of the role you would like to add:',
            validate: (input) => { input.trim() !== '' || 'Role name cannot be empty.'; }
        },
    ]);
    const roles = await pool.query('SELECT * FROM role');
    await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select the role for the employee:',
            choices: roles.rows.map((role) => ({name: role.title, value: role.id})),
        }
    ]);
    try {
        await pool.query('INSERT INTO role (title) VALUES ($1)', [roleName]);
        console.log(`Role ${roleName} added successfully.`);
    } catch (error) {
        console.error('Error adding role:', error);
    }
}

async function viewDepartments() {
    try {
        const result = await pool.query('SELECT * FROM department');
        console.table(result.rows);
    } catch (error) {
        console.error('Error viewing departments:', error);
    }
}

async function addDepartment() {
    const {departmentName} = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department you would like to add:',
            validate: (input) => { input.trim() !== '' || 'Department name cannot be empty.'; }
        },
    ]);
    try {
        await pool.query('INSERT INTO department (name) VALUES ($1)', [departmentName]);
        console.log(`Department ${departmentName} added successfully.`);
    } catch (error) {
        console.error('Error adding department:', error);
    }
    
    init ();
    
}
// Removed unused init function

  async function mainMenu() {
    const {action} = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View employees', 'Add employee', 'Update employee role', 'Add role', 'View roles',  'Add department', 'View departments','Quit',],
        },
    ]);
    switch (action) {
        case 'View employees':
            await viewEmployees();
            break;
        case 'Add employee':
            await addEmployee();
            break;
        case 'Update employee role':
            await updateEmployeeRole();
            break;
        case 'View roles':
            await viewRoles();
            break;
        case 'Add role':
            await addRole();
            break;
        case 'View departments':
            await viewDepartments();
            break;
        case 'Add department':
            await addDepartment();
            break;
        case 'Quit':
            process.exit();
    }

    await mainMenu();
}

(async () => {
    await connectToDb();
    await mainMenu();
})();
async function init() {
    console.log('Returning to main menu...');
    await mainMenu();
}

