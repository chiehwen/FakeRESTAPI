module.exports = () => {
  const faker = require("faker");
  const _ = require("lodash");
  return {
    people: _.times(100, (n) => {
      return {
        id: n,
        name: faker.name.findName(),
        mobile: faker.phone.phoneNumber() ,
        avatar: faker.internet.avatar()
      }
    })
  }
}