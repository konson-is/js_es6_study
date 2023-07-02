function createBookShop(inventory){
    return {
        inventory :inventory,
        inventoryValue:function(){
            return this.inventory.reduce((total,book) => total + book.price,0);
        },
        priceForTitle: function(title){
            return this.inventory.find((book) => book.title === title).price;

        }
    };
}

const inventory = [
    {title:'ハリーポッター',price:1000},
    {title:'JavaScript入門',price:1500},

];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log('=======');
console.log(bookShop.priceForTitle('ハリーポッター'));