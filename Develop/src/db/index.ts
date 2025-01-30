import { Sequelize } from 'sequelize';

// Initialize Sequelize with your database configuration
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mariadb', 'mssql'
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: Error) => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;