const faker = require("faker");

const createFakeDescription = () => ({
  product_name: faker.commerce.productName(),
  product_description: faker.lorem.words(10),
  price: faker.random.number({ min: 1, max: 500 }),
  category_id: faker.random.number({ min: 1, max: 10 }),
  rating: faker.random.number({ min: 1, max: 5 })
});

exports.seed = async function(knex, Promise) {
  let fakeDescriptions = [];
  const quantity = 1000;
  for (let j = 0; j < 10000; j++) {
    for (let i = 0; i < quantity; i++) {
      fakeDescriptions.push(createFakeDescription());
    }
    await knex("descriptions").insert(fakeDescriptions);
    setTimeout(() => {
      fakeDescriptions = [];
    }, 0);
  }
};
