var products = [
    {name: 'きゅうり',type:'野菜'},
    {name: 'バナナ',type:'フルーツ'},
    {name: 'セロリ',type:'野菜'},
    {name: 'オレンジ',type:'フルーツ'},
];

/* var filterProducts = [];
for(var i=0; i<products.length; i++){
    if(products[i].type === 'フルーツ'){
        filterProducts.push(products[i]);
    }
} */

filterProducts = products.filter(function(product){
    return product.type === 'フルーツ';
});

console.log(filterProducts);