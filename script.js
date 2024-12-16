export {persona, sum} from "./function.js"


const persona = {
    nome: 'alice',
    età: 23,
    city: 'new york',
}

const  {nome, età, city} = persona;

console.log(persona)


function sum(n1, n2) {
    sum = n1+n2;
    return sum;
}