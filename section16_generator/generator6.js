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
}

const names = [];
for(let name of TeamIterator(engineeringTeam)){
    names.push(name);
}

console.log(names);