'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [
        {
          fname: 'fname1',
          lname: 'lname1',
          address: 'address1',
          postcode: 'postcode1',
          contact: 'contact1',
          email: 'email1',
          username: 'username1',
          password: 'password1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fname: 'fname2',
          lname: 'lname2',
          address: 'address2',
          postcode: 'postcode2',
          contact: 'contact2',
          email: 'email2',
          username: 'username2',
          password: 'password2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fname: 'fname3',
          lname: 'lname3',
          address: 'address3',
          postcode: 'postcode3',
          contact: 'contact3',
          email: 'email3',
          username: 'username3',
          password: 'password3',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
