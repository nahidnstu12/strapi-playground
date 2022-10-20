const { faker } = require("@faker-js/faker");
async function fakeProductData(strapi) {
  for (let i = 0; i < 20; i++) {
    await strapi.entityService.create("api::product.product", {
      data: {
        title: faker.commerce.productName(),
        desctiption: faker.commerce.productDescription(),
        price: faker.datatype.number(100),
        stock: faker.datatype.number({min: 5, max:20}),
        category: faker.helpers.arrayElement([1, 2, 3, 4, 5]),

        // products: [1,3]
        // status: faker.helpers.arrayElement(['pending', 'approve', 'reject'])
      },
    });
  }
}

module.exports = { fakeProductData };
