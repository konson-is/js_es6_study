//for...ofの使い方
const colors = ['red','green','blue'];

for(let color of colors){
    console.log(color);
}

const numbers = [1,2,3,4];
let total = 0;
for(let number of numbers){
    total += number;
}
console.log(total);