function unique(array) {
    return array.reduce(function(previous,item){
        var existNumber = previous.find(function(prev){
            return prev === item;
        })
        if(!existNumber){
            previous.push(item);
        }
        return previous;
    },[]);
}

//console.log(unique([1,2,3,4,5,6,6,6]));