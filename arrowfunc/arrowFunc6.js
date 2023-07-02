/* const profile = {
    name: '太郎'
}; */

const profile = {
    name: '太郎',
    getName:function(){
        return this.name;
    }
};

console.log(profile.getName());
