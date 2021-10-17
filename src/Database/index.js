const { Tag } = require("../Model/Tag");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const { PROD, DATABASE_URL } = process.env;

function loadEnvironment(testing) {
  let options;

  if (DATABASE_URL === undefined || DATABASE_URL === "" || testing === 1) {
    console.error("DATABASE_URL: empty required environment variable");
    return null;
  }

  // Checks if we are being deployed at production/homol environment
  if (PROD === "true" || testing === 2) {
    options = {
      dialect: "postgres",
      define: {
        timestamps: true,
        underscored: true,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: false,
    };
  } else {
    options = {
      dialect: "postgres",
      define: {
        timestamps: true,
        underscored: true,
      },
      logging: false,
    };
  }

  console.info(`environment: ${PROD}`);
  console.info(`database url: ${DATABASE_URL}`);
  console.info(`database settings: ${JSON.stringify(options)}`);

  return options;
}

async function setupModels(db) {
  Tag.init(db);
}

async function setupSequelize() {
  return new Sequelize(DATABASE_URL, loadEnvironment());
}

async function configure(auth, db) {
  return new Promise((resolve, reject) => {
    auth.then(() => {
      setupModels(db);
      resolve(0);
    });
  });
}

async function initializeDatabase() {
  const db = await setupSequelize();
  const auth = db.authenticate();
  return configure(auth, db);
}

module.exports = {
  initializeDatabase,
  loadEnvironment,
};
