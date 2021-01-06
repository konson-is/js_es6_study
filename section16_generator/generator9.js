const testingTeam = {
    lead:'典子',
    tester:'隆',
    //動的プロパティ
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    size:3,
    department:'開発部',
    lead:'太郎',
    manager:'花子',
    engineer:'次郎',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;//yield* 別のgeneratorの中身を実行、オブジェクトの中にあるSymbol.iteratorを探しにいく
        
    }
};

const names = [];
//for ofはSymbol.iteratorの定義を見にいく
//配列は最初からSymbol.iteratorを実装しているものになる
//配列以外のオブジェクトではSymbol.iteratorを定義する
for(let name of engineeringTeam){
    names.push(name);
}

console.log(names);