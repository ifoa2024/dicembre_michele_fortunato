


//  export const persona = {
//     nome: 'alice',
//     età: 23,
//     city: 'new york',
// }

// const  {nome, età, city} = persona;

// console.log(persona)


// export function sum(n1, n2) {
//   return n1+n2;
// }

// console.log(sum(...[1,2]));
// const array = [1,2,3];
// const obj  ={...array}
// console.log(obj);

// const array1 = [5,4,3];
// const array2 = [34,5623,523];

// const newArray = [...array1, ...array2];
// console.log(newArray);

// const userState = {
//     name: 'mirko',
// };

// const newuserState  ={
//     ...userState, 
//     age: 30,
//     email: 'mirkki@gmmail.comn',
//     isOnline: true,
// }

// console.log(newuserState);

// let options = {
//     size: {
//         width: 100,
//         heigth: 200,
//     },
//     items: ['cake', 'donut'],
//     extra: true,
// }

// let {size:{width, heigth}, items: [cake, donut], extra} = options;
// alert(width);


// function printNameAge() {
//     console.log(`${nome}, anni ${età}`);
// }

// console.log(printNameAge())


//(1)
 const person = {
    name: 'pinuccio',
    surname: 'clemente',
    age: 55,
}

let {name, surname} = person;
let {age} = person;
console.log(person);


//(2)
let colors = [
    'green',
    'white',
    'red',
]

const newColors = [...colors];
console.log(newColors);

if(newColors.length < 3){
    newColors[2] == "yellow"
    console.log(newColors);
}


//(3)

let book = {
    title: 'La divina commedia',
        autore:'Dante Alighieri',
        numeroPagine:224,
}
let {title, autore} = book;
console.log(`${title}, di  ${autore}`);


//(4)

let product = {
    productName: 'pc',
    prezzo:1299,
    categoria:'elettronica',
    capacità:'1 tb',
    ram:'16gb'
}

let {productName, prezzo} = product;
console.log(`hai acquistato un ${productName} al prezzo di ${prezzo} euro`);


//(5)
let num1 = [1,2,3];

let num2 = [4,5,6];

const newNum = [
    26,
    ...num1,
    ...num2,
]

console.log(newNum);
