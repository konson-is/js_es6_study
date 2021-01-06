var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
];

//['red','yellow','blue']

var colors = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(colors);