const Sequelize = require('sequelize');

let sequelize;

sequelize = new Sequelize({
  database: 'insta_db',
  dialect: 'postgres',
  username: 'sequelize',
  password: 'pass',
  define: {
    underscored: true,
  }
})
