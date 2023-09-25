"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Categories", {
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint("Categories", {
      fields: ["id"],
      type: "unique",
      name: "unique_category_id",
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeConstraint("Categories", "unique_category_id");
    await queryInterface.dropTable("Categories");
  },
};