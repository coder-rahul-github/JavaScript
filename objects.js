const mysym = Symbol("key1");

const jsuser = {
    name:"rahul",
    age:24,
    [mysym]: "mykeys",
    email:"dasr6163@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:['monday','tuesday']
};
//console.log(jsuser.lastLoggedinDays);
//console.log(jsuser["lastLoggedinDays"]); //good practice
// console.log(jsuser[mysym])

// // jsuser.name="Rahul Das";
// console.log(jsuser);

// jsuser.greeting = function(){
//     console.log(`welcome ${this.name}`);
// }
// console.log(jsuser.greeting());

const java = new Object() // singleton object
const java1 = {} // not a singleton
// console.log(java); 
// console.log(java1);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={5:'e',6:'f'}
const obj4= {...obj1 , ...obj2 , ...obj3};
//const obj4= Object.assign({},obj1,obj2,obj3);
// console.log(obj4);
// console.log(Object.values(obj4));
// console.log(Object.values(obj4).toString().toUpperCase());

// console.log(Object.values(jsuser));
// console.log(jsuser.hasOwnProperty("email"));

const regularuser={
    email : "r@gmail.com",
    fullname :
    {username:{
        firstname:"akash",
        lastname:"misra"
    }}
};
console.log(regularuser.fullname.address?.username.lastname ?? "not exixst");