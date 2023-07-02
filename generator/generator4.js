//ジェネレーターにするには*を追加
function* shopping(){
    // 歩道

    // 歩道を歩いてお店にいく

    // お店に到着したのでお金をもってお店に入る
    const stuffFromStore =  yield 'お金';

    //　コインランドリーに到着したので、服を持って入る
    const cleanClothes = yield '汚れた服';

    //家に歩いて帰る
    return [stuffFromStore,cleanClothes];

}

//お店関連の世界
const gen = shopping();
console.log(gen.next()); //家から歩道に出る
console.log(gen.next('日用品').value); //お店で買物して日用品をもって歩道に出る
console.log(gen.next('綺麗な服').value);