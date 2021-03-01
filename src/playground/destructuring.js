
const person={
    name:'Andrew',
    age:24,
    location:{
        city:'Dallas',
        temp:4
    }
}

const {name,age, location}=person;
//const {city,temp:tempeture}=person.location;

//console.log(`${name} is ${age}, live at ${city} temp ${tempeture}` );

const book={
    title:'Ege is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
}
const {name:publishername='self published'}=book.publisher;

console.log(`${publishername}`);

//
// Array destructuring
//

const address=['1234 water line','Dallas','Texas','76248'];
const [street,city,state,zip]=address;
console.log(`you are in ${street},${city}`);

const item=['Coffee (hot)','$2.00','$2.50','$2.75'];
const [coffee,,mediumPrice]=item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);