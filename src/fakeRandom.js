const faker = require('faker')

const image = faker.random.image()
const number = faker.random.number()
const word = faker.random.word()
const uuid = faker.random.uuid()

console.log({image})
console.log({number})
console.log({word})
console.log({uuid})