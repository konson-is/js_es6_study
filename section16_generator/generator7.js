const testingTeam = {
    lead:'典子',
    tester:'隆',
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
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;//yield* 別のgeneratorの中身を実行
}

function* TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)){
    names.push(name);
}

console.log(names);