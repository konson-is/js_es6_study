const companies = [
    'Google',
    'Facebook',
    'Uber'
];

//[]は配列の要素を抽出
//{}はオブジェクトのプロパティを抽出
const [ name,...rest ] = companies;
const {length} = companies;
console.log(name);
console.log(rest);

