const user = {
    name: "caro",
    lastName: "vejar",
    age: 28,
    adress: {
        city: "stgo",
        zip: "8640000"
    }
}

const user2 = { ...user }

console.log(user.name);