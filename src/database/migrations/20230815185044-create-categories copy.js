"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("categories", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("categories", {
      fields: ["id"],
      type: "unique",
      name: "unique_category_id",
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeConstraint("categories", "unique_category_id");
    await queryInterface.dropTable("categories");
  },
};