/* rest演算子 */
function addNumbers(...numbers){
    return numbers.reduce((sum,number) => {
        return sum + number
    },0);
}

console.log(addNumbers(1,2,3,4,5,6,7,8,9,10));