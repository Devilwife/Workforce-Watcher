import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
const questions = [
    {
        type: 'input',
        name: 'View',
        message: 'What is your name?',
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password:',
    },
];

inquirer.prompt(questions).then((answers) => {
    const filePath = path.join(__dirname, 'user-data.json');
    fs.writeFileSync(filePath, JSON.stringify(answers, null, 2));
    console.log('User data saved to user-data.json');
});