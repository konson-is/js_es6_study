/* function getMessage(){
    const year = new Date().getFullYear();

    return "今年は" + year + "年です";
} */

function getMessage(){
    //const year = new Date().getFullYear();
    //中身がJSであれば何でもOK
    return `今年は${new Date().getFullYear()}年です`;

}

console.log(getMessage());