var expense = {
    type :'交際費',
    amount:'4500 JPY'
};

//var type = expense.type;
//var amount = expense.amount;

//ES6
const{ type:myType,amount,asdf} = expense;
//変数名変えるときはキーバリューで指定
console.log(typeof asdf);