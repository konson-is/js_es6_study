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
};

function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;//yield* 別のgeneratorの中身を実行、オブジェクトの中にあるSymbol.iteratorを探しにいく
}

const names = [];
for(let name of TeamIterator(engineeringTeam)){
    names.push(name);
}

console.log(names);