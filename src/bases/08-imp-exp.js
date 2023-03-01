import  heros, {owners}  from '../data/heros';

console.log(heros);
console.log(owners);

export const getHeroById = (id) => {
    const hero = heros.find(x => x.id === id);
    return hero ? hero :  "No hay ningún heroe"
}

// console.log(getHeroById(10));

const getHeroByOwner = (owner) => {
    const hero = heros.filter(x => x.owner === owner);
    return hero ? hero :  "No hay ningún heroe"
}

// console.log(getHeroByOwner("DC"));