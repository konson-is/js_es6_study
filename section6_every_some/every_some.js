var names = [
    'けん',
    'はなこ',
    'そういちろう',
];

result1 = names.every(function(name){
    return name.length >= 3;
})

console.log(result1);

result2 = names.some(function(name){
    return name.length >= 3;
})

console.log(result2)

