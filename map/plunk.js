function pluck(array, property) {
    // pluck関数の中身を実装してください
    newArray = array.map(function(item){
        return item[property];
    });

    return newArray;
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

var colorNames = pluck(colorObjects, 'color');

console.log(colorNames);