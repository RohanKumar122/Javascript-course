
// 1. Object Literal 
// const user ={
//     Username : "Rohan Kumar",
//     Profession:" Software Engineer",
//     place: "Varanasi",
//     main:function(){
//         console.log(this) 
//         console.log(this.Username)
//     }
// }
// // console.log(this)
// console.log(this.user)
// console.log(user.main())








// function calculator(...data){
//     console.log(...data)
    
// }

// calculator("r",'o','h','a','n')

// 2. Constructor function
function User(username, loginCount, isLoggedIn){
    this.username =username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    // return this  (this keqword Impicitely defines means not neccessary to return this )
}

// const userOne =User('Rohan',5,true)
// const userTwo =User("John",92,false)
// console.log(userOne)
// --------->Note: Data will be Overide so we use new keyword

const userOne =new User('Rohan',5,true)
const userTwo =new User("John",92,false)
console.log(userOne)
console.log(userTwo)