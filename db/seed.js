const faker = require("faker");
const db = require("./index.js");

const collection = db.collection("description");

const pushBatch = (countSoFar, target) => {
  console.log("countSofar: " + countSoFar);
  let descriptions = [];
  for (let i = 0; i < 1000; i++) {
    descriptions.push({
      _id: i + countSoFar,
      productName: faker.commerce.productName(),
      productDescription: faker.lorem.words(30),
      price: faker.commerce.price(),
      category_id: faker.random.number({ min: 1, max: 10 }),
      rating: faker.random.number({ min: 1, max: 5 })
    });
  }
  if (countSoFar < target) {
    collection
      .insertMany(descriptions)
      .then(() => pushBatch(countSoFar + 1000, target));
  }
};

pushBatch(0, 10000000);
