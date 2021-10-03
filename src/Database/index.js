const { Tag } = require("../Model/Tag");
const config = require("./config");
const { Sequelize } = require("sequelize");

async function setupModels(db) {
    Tag.init(db);
}

async function setupSequelize(cfg) {
    return new Sequelize(cfg);
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
    const db = await setupSequelize(config);
    const auth = db.authenticate();
    return configure(auth, db);
}

module.exports = {
    initializeDatabase,
};
