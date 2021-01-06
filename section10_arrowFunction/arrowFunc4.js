const team = {
    members:['太郎','花子'],
    teamName:'スーパーチーム',
    teamSummary: function(){
        // this === team
        return this.members.map((member) => {
            // lexical this　アロー関数を書く場所によってthisが決まる
            return `${member}は${this.teamName}の所属です。`;
        });
    }
}

console.log(team.teamSummary());