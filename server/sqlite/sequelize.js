const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   database: 'tg7nhfvhyfbvx4ei',
//   user: 's2vnrt545p9g578q',
//   password: 'z48dakz0vkx8jaac',
//   host: 'esilxl0nthgloe1y.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
//   port: 3306,
// });
// module.exports = sequelize;
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./sqlite/db_ae.db",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;