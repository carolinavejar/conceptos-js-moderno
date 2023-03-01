const characters = ["shrek", "fiona", "burro"];

const [ , c2 ] = characters;

console.log(c2);

const returnArray = () => {
    return ["abc", 123]    
}

const [ letters, numbers ] = returnArray();

console.log(letters, numbers);

const usState = (value) => {
    return [value, () => {  console.log(`Hola mundo`) }]    
}

const [ nameUser, setName ] = usState('pinocho');

console.log(nameUser);
setName();