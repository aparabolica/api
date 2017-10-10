'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      // e-mail
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      emailIsVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      // phone numbers
      landlineNumber: {
        type: Sequelize.STRING
      },
      cellphoneNumber: {
        type: Sequelize.STRING
      },

      // personal info
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
      },
      gender: {
        type: Sequelize.STRING
      },

      // meta
      roles: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },

      // timestamp
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      lastSignedInAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
