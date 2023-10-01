//First Promise
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


//Second Promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){console.log("Async 2 resolved!!")
})



// api GET method
const promiseThree =new Promise(function(resolve,reject){
    console.log("This is promise Three!!")
    setTimeout(function(){
        resolve({'user':"Rohan",'email':"rohan@emsec.uk"});
    },1000)
}) 
promiseThree.then(function(user){
    console.log(user)
})

// Reject if getting an error:

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({User:"Rohan Kumar",Email :"rk399504@gmail.com",Token:11});
        }
        else{
            reject('Error: Something went Wrong!!')
        }

    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.User
}).then((Username)=>{
    console.log(Username)
    console.log("---------------four-------------------------")

}).catch(function(e){
    console.log(e)
}).finally(()=>{
    console.log("The Promise is either resolve or Rejected!!")
})


//PromiseFive: 

// const promiseFive =new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error =false;
//         if(!error){
//             resolve({user:"javascript",email:"js@example.com"}) 
//         }
//         else{
//             reject("Error: Something wrong!!")
//         }
//     },1000)
// })

// promiseFive.then((data)=>{
//     console.log(data)
//     console.log("---------------five-------------------------")
// }).catch((e)=>{
//     console.log(e)
// })



// async function getAllUsers (){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }
//     catch(e){
//         console.log("Error: ",e)
//     }
// }
// getAllUsers()


//Direct fetch method with then
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response
}).then(
    (data)=>{
        console.log(data)
    }
)
.catch((error)=>{
    console.log(error)
})

