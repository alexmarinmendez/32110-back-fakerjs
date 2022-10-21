const faker = require('faker/locale/fr')

const firstName = faker.name.firstName() 
const lastName = faker.name.lastName() 

const jobTitle = faker.name.jobTitle()
const jobArea = faker.name.jobArea()
const prefix = faker.name.prefix()
const phone = faker.phone.phoneNumber()


console.log({prefix})
console.log({firstName})
console.log({lastName})
console.log({jobTitle})
console.log({jobArea})
console.log({phone})