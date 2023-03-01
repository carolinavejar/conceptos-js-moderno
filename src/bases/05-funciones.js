function hello(name) {
    return `Hola ${name}`;
}

const hello2 = (name) => {
    return `Hola ${name}`;
}

const hello3 = (name) => `Hola ${name}`;

const hello4 = (name) => `Hola`;


console.log(hello("caro"));
console.log(hello2("caro"));
console.log(hello3("CARO"));
console.log(hello4());

const getUser = (name) => (
    {
        uid: 1111,
        user: "carito"
    })


const user = getUser();
console.log(user);

const getActiveUser = (name) => (
    {
        uid: 1111,
        user: name
    }
)

const activeUser = getActiveUser("CARITOP");
console.log(activeUser);