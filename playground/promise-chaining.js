require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5deedadaad609106cc94afbb', { age : 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((E) => {
//     console.log(E)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5deedadaad609106cc94afbb', 16).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})