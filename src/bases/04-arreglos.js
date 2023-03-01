// const arrayExample = new Array(100); // crear un array con 100posiciones vacias

const arrayExample = [];

arrayExample.push(1);
arrayExample.push(2);
arrayExample.push(3);

let arrayExample2 = [ ...arrayExample, 4];

let arrayExample3 = arrayExample2.map((x) => {
    return x*2
});

console.log(arrayExample);
console.log(arrayExample2);
console.log(arrayExample3);