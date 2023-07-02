var users = [
    {name: '太郎'},
    {name: '次郎',id:1},
    {name: '三郎'},
    {name: '次郎',id:10},
];

var user;

/* for(i=0;i<users.length; i++){
    if(users[i].name === '次郎'){
        user = users[i];
        break;
    }
} */

user = users.find(function(user){
    return user.name === '次郎';
});

console.log(user);