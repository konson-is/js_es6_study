/* const companies = [
    {name:'Google',location: 'マウンテンビュー'},
    {name:'Facebook',location: 'メンロパーク'},
    {name:'Uber',location: 'サンフランシスコ'},
];

const [ {location} ] = companies;
console.log(location); */


//↑配列の要素からオプジェクトのプロパティを抽出

const Google = {
    locations : ['マウンテンビュー','ニューヨーク','ロンドン'],
};

const {locations: [first] } = Google;
//const [ first ] = locations;
console.log(first);