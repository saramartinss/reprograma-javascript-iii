function randomPromise (){
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            if (Math.random() > 0.5) {
                resolve("olá")
            } else {
                reject("tchau")
            }
        }, 1000)
    })
}

randomPromise().then(function (data) {
    console.log('data', data);
}).catch(function(error) {
    console.log('error', error)
})

console.log("uma frase")