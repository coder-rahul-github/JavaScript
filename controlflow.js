//short circuit in js with &&
// let isloggedIn = true;
// isloggedIn && console.log(`welcome ${isloggedIn}`);

// //short circuit in js with ||
// let user =""
// let result = user || "kunal"

// console.log(result);

// let results = undefined;
// console.log(results ?? "hello"); //nullish coalising
// console.log(results || "hello");

//optional chaining ?.

let user ={};
console.log(user.address?.city);
console.log("executed");

console.log(!"hello");
console.log(!"");
console.log(!0);
console.log(!!"javascript");
console.log(!!undefined);

let student = {
    name:"rahul",
    marks:{
        score:75
    }
};
console.log(student.marks.score);
