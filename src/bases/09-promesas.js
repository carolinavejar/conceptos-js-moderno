import { getHeroById } from "./08-imp-exp";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroById(2)
        resolve(hero);
    }, 2000);
});

promise.then((hero) => {
    console.log("Then de la promesa ", hero);
}).catch((err) => {
    console.warn(err)
})

const getHerosByIdAsync = (id) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if (hero) resolve(hero);
            else reject("heroe no encontrado")
        }, 2000);
    });
}

getHerosByIdAsync(30)
.then( console.log )
.catch( console.warn) ;