var numbers = [1,2,3,4,5];

var sum = 0;

/* numbers.forEach(function(number){
    sum += number;
});

console.log(sum); */

function adder(number){
    sum += number;
}

numbers.forEach(adder);

console.log(sum);