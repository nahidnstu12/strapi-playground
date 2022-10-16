const {faker} = require("@faker-js/faker");
async function createGenData (strapi) {
    for(let i = 0; i< 4; i++ ){
        await strapi.entityService.create("api::gendata.gendata", {
          data: {
            title: faker.word.noun() + " " + faker.word.noun(),
            price: faker.datatype.number(100),
            status: faker.helpers.arrayElement(['pending', 'approve', 'reject'])
            // title: faker.datatype.number(100),
            // price: i,
            // status: "pending"
          }
        })
      }
}

module.exports = {createGenData}