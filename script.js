


 export const persona = {
    nome: 'alice',
    età: 23,
    city: 'new york',
}

const  {nome, età, city} = persona;

console.log(persona)


export function sum(n1, n2) {
    sum = n1+n2;
    return sum;
}

console.log(sum());



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