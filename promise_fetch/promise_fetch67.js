url = 'https://jsonplaceholder.typicode123456.com/posts/';
fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('問題発生！！！！',error));
    //注意：ネットワークによるエラーだけcathcに入る、コードが200以外でもサーバからレスポンスが変えればthenを通る