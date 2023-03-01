const user = {
    username: "cvejar",
    age: 28,
    pass: "12345678"
};

// const { username, age, pass } = user;

// const returnUser = ({ username, name = "carolina" }) => {
//     console.log("Name: ", name);
//     console.log("username: ", username);
// }

const usContext = ({ username, name = "carolina", pass}) => {
    console.log("use context ..");
    return {
        namePass : pass,
        usernameR : username,
        latlng: {
            lat: 111.111,
            lng: 222.222
        }
    }
}

const { namePass, usernameR, latlng: { lat, lng} } = usContext(user);

console.log( namePass, usernameR, lat, lng );