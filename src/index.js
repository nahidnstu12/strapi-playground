"use strict";
const { fakeCategoryData } = require("./seeder/fakeCategoryData");
const { fakeProductData } = require("./seeder/fakeProductData");
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
  // async bootstrap({ strapi }) {
  //   createGenData(strapi)
  //   // for(let i = 0; i< 10; i++ ){
  //   //   await strapi.entityService.create("api::gendata.gendata", {
  //   //     data: {
  //   //       title: faker.word.noun() + " " + faker.word.noun(),
  //   //       price: faker.datatype.number(100),
  //   //       status: faker.helpers.arrayElement(['pending', 'approve', 'reject'])
  //   //       // title: faker.datatype.number(100),
  //   //       // price: i,
  //   //       // status: "pending"
  //   //     }
  //   //   })
  //   // }
  // },

  async bootstrap({ strapi }) {
    console.log("running App bootstrap...");
    if (process.env.NODE_ENV === "development") {
      console.log("running the development bootstrap...");

      console.log(process.env.FORCE_APP_BOOTSTRAP_ONLY === "true");
      console.log(process.env.NODE_ENV === "development");

      if (process.env.FORCE_APP_BOOTSTRAP_ONLY === "true") {
        console.log("inside faking");
        await createGenData(strapi);
        await fakeCategoryData(strapi);
        await fakeProductData(strapi);

        // console.log(await fakeCategoryData(strapi))
      }

      // other DEVELOPMENT bootstrap functions
    }

    // general bootstrap functions

    console.log("bootstrap function has finished successfully!");

    if (process.env.FORCE_APP_BOOTSTRAP_ONLY === "true") {
      console.log("terminated");
      process.exit(0);
    }
  },
};
