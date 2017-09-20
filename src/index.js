console.log('hello Test');

// Function definition

// function hello()
// {

// }

// Stopp reasigning av funksjonen
//const hello = function()
//{
//
//}

// Arrow function
//const hello () => {
//
//}

//const add = (x, y) =>
//{
//    return x + y;
//}

// kan oneline det:
const add = (x, y) => x + y

// Eksempel
const add5 = x => x + 5;

// Parenteser gjør at den bare tror det er en return value
const returnJson = person =>
({
    name: person.name
});


console.log(add(5, 6));
console.log(add5(6));

// Logging av navn
let name = 'bjarte';
console.log('my name is ' + name)

// Eller
console.log(`my name is ${name}`)

// Promises og async await.
// Javascript har async await loop.
const wait1 = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
            // Det du resolver blir parameter til "then" funksjonen
        }, 2000);
    });
}

let a = wait();
a.then(() => {
    console.log("done waiting 2 seconds");
});

// Bruk setTimeout, ikke setInterval
// Mozilla javascript reference, eller nodejs documentation

async function wait()
{
    let ret = await setTimeout(() => {
        return 5;
    }, 2000);

    return ret;
}

// Vent til async funksjonen er ferdig med å kjøre
// Men denne blokker
(async () => {
let a = await wait();

})() // Ikke lenger thread blocking
// Alternative til promise
// Men det tillatter ikke reject
//wait1()
//.then()
//.catch(err => console.log(err));
//
const wait2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error');
            // Det du resolver blir parameter til "then" funksjonen
        }, 2000);
    });
}

wait1()
.then(x => console.log(x))
.then(x => wait2())
.catch(err => console.log(err))

let list = [
    1,2,3,4,5
];

// Kan gjøre vanlig for løkker
for (let i = 0; i < list.length; ++i) {

}

// Eller:, kaogså ta inn arrayen
list.map((value, index) => {
    console.log(value, index);
});

// Fjerner ting som ikek blir returnet fra lista
let c = list.reduce((prev, current) => {
    console.log(prev, current);
    return current;
}, 0);
// Siste argument blir prev til 0,
// resultat av det blir prev til neste
// Sjekk om noe eksisterer med -1 når du bruker indexOf

// Kan legge til funksjoner gjennom prototype inheritance.

Array.prototype.magic = function() {
    console.log(this.length);
}

list.magic();

// Sett på som dårlig praksis!
// Ikke hiv på egen funksjonalitet på ting du ikke har skrevet
// Lag heller en pure function
// Bedre:
const magic = (list) => list.length;
// Kall slik
magic(list);

// Javascript har klasses
// Nei, den har structs med funksjoner
class Test2 {
    constructor() {

    }
};

