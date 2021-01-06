/* const team = {
    members:['太郎','花子'],
    teamName:'スーパーチーム',
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member}は${this.teamName}の所属です。`;
            //コールバック関数の中身は別世界
        }.bind(this));
    }
} */

const team = {
    members:['太郎','花子'],
    teamName:'スーパーチーム',
    teamSummary: function(){
        const self = this;
        return this.members.map(function(member){
            return `${member}は${self.teamName}の所属です。`;
            //コールバック関数の中身は別世界
        }.bind(this));
    }
}

console.log(team.teamSummary());