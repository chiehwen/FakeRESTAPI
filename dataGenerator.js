const faker = require('faker');
const _ = require('lodash');

let db = { films: [] };

for (var index = 0; index < 1000; index++) {
  db.films.push({
    id: index,
    englishName: faker.random.words(),
    director: faker.name.firstName() + ' ' + faker.name.lastName(),
    imdbRatings: Math.floor(Math.random() * 100 + 1) / 10 
  })  
}

console.log(JSON.stringify(db));