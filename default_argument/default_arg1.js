function makeAjaxRequest(url,method = 'GET'){

    return method;
}

console.log(makeAjaxRequest('google.com',null));
console.log(makeAjaxRequest('google.com','POST'));