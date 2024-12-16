


 export const persona = {
    nome: 'alice',
    età: 23,
    city: 'new york',
}

const  {nome, età, city} = persona;

console.log(persona)


export function sum(n1, n2) {
  return n1+n2;
}

console.log(sum(...[1,2]));
const array = [1,2,3];
const obj  ={...array}
console.log(obj);

const array1 = [5,4,3];
const array2 = [34,5623,523];

const newArray = [...array1, ...array2];
console.log(newArray);

const userState = {
    name: 'mirko',
};

const newuserState  ={
    ...userState, 
    age: 30,
    email: 'mirkki@gmmail.comn',
    isOnline: true,
}

console.log(newuserState);

let options = {
    size: {
        width: 100,
        heigth: 200,
    },
    items: ['cake', 'donut'],
    extra: true,
}

let {size:{width, heigth}, items: [cake, donut], extra} = options;
alert(width);


function printNameAge() {
    console.log(`${nome}, anni ${età}`);
}

console.log(printNameAge())