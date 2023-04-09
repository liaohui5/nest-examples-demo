'use strict';

const Mock = require("mockjs")

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
    const data = Mock.mock({
      'rows|30': [{
        'id|+1': 1,
        email: '@email',
        username: '@name',
        password: '$2b$10$RgbaCU24JbeyoRN6o7ntn.qA3Zc2o2khe6W38gYU4vwipFG37KxnG', // bcrypt -> 123456
        avatar: '@url',
        status: 0,
      }]
    })

    await queryInterface.bulkInsert('users', data.rows, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
