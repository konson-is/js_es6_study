const defaultColors = ['赤','緑'];
const userFavoriteColors = ['オレンジ','黄'];
const fallColors = ['茶','紅葉'];
//console.log(defaultColors.concat(userFavoriteColors));

//spread演算子　配列の中身を展開
//console.log(['青',...fallColors,'紫',...defaultColors,...userFavoriteColors]);

function validateShoppingList(...items){
    if(items.indexOf('牛乳') < 0){
        return ['牛乳',...items];
    }
}

console.log(validateShoppingList('オレンジ','パン'));