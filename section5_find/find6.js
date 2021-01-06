var ladders = [
    {id:1,height:20},
    {id:3,height:25},
];

var findItem = findWhere(ladders,{height:25});

function findWhere(array, criteria){
    return array.find(function(item){
        return item.height === criteria.height;
    });
}