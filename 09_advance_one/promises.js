const promiseOne = new Promise(function(resolve,reject){
    //Do a async Task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed!!~")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    },1000)
}).then(function(){console.log("Async 2 resolved!!")
})