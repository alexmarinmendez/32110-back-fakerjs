const faker = require('faker/locale/es_MX')
const fs = require('fs')

function generateUsers() {
    let users = []
    for (let id=1; id<=100; id++) {
        const firstName = faker.name.firstName() 
        const lastName = faker.name.lastName() 
        const email = faker.internet.email()

        users.push({
            id,
            firstName,
            lastName,
            email
        })
    }
    return { data: users }
}

fs.writeFileSync("users.json", JSON.stringify(generateUsers(), null, 2))