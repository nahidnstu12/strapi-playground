'use strict';
// const {faker} = require("@faker-js/faker");
const { createGenData } = require("./seeder/gendata");
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    createGenData(strapi)
    // for(let i = 0; i< 10; i++ ){
    //   await strapi.entityService.create("api::gendata.gendata", {
    //     data: {
    //       title: faker.word.noun() + " " + faker.word.noun(),
    //       price: faker.datatype.number(100),
    //       status: faker.helpers.arrayElement(['pending', 'approve', 'reject'])
    //       // title: faker.datatype.number(100),
    //       // price: i,
    //       // status: "pending"
    //     }
    //   })
    // }
  },
};
