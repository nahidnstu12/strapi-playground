const { faker } = require("@faker-js/faker");
const { uploadFile } = require("./helpers");
const { join } = require("path");
async function fakeCategoryData(strapi) {
    
    const uploadedTodoMedia = await uploadFile(strapi, {
        data: {
          refId: Date.now().toString(),
          ref: 'api::category.category',
          field: 'image',
        },
        file: {
          path: join(__dirname, '../../public/uploads/site_logo_1a04d85e28.jpg'),
        //   public\uploads\site_logo_1a04d85e28.jpg
          name: 'todo.jpeg',
          type: 'image/jpeg'
        },
      })
  for (let i = 0; i < 5; i++) {
    await strapi.entityService.create("api::category.category", {
      data: {
        category_title: faker.commerce.department(),
        category_image: uploadedTodoMedia.id
        // products: faker.helpers.arrayElements(
        //   [
        //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        //     20,
        //   ],
        //   2
        // ),
        // products: [1,3]
        // status: faker.helpers.arrayElement(['pending', 'approve', 'reject'])
      },
    });
  }
}

module.exports = { fakeCategoryData };
