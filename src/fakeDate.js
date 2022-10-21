const faker = require('faker')

const weekday = faker.date.weekday()
const month = faker.date.month()
const recentDate = faker.date.recent()
const futureDate = faker.date.future()
const pastDate = faker.date.past()


console.log({weekday})
console.log({month})
console.log({recentDate})
console.log({futureDate})
console.log({pastDate})