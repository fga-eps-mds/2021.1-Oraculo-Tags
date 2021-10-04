const { Model, Sequelize } = require("sequelize");

class Tag extends Model {
    static init(db) {
        super.init(
            {
                name: { type: Sequelize.TEXT },
                color: { type: Sequelize.TEXT },
            },
            {
                sequelize: db,
                tableName: "tags",
            }
        );
    }
}

module.exports = { Tag };
