'use strict';

const Mock = require("mockjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const date = new Date();
    const data = Mock.mock({
      'rows|20': [
        {
          'id|+1': 1,
          'user_id|1-30': 1,
          project_name: '@ctitle',
          'created_at': date,
          'updated_at': date,
        },
      ]
    })

    await queryInterface.bulkInsert('projects', data.rows, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('projects', null, {})
  }
};
