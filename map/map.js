var numbers = [ 1,2,3]
var doubuleNumbers = [];

/* for(var i = 0; i< numbers.length; i++){
    doubuleNumbers.push(numbers[i] * 2);
} */

var doubuled = numbers.map(function(number){
    return number * 2
});

console.log(doubuled);