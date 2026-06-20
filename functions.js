// function mySum(a,b){
//     sum=a+b
//     console.log(sum);
// } 
// mySum(5,7);

// const newFunction = function marks(math,sci,eng){
//     total= math+sci+eng
//     per=(total/300)*100
    
//     return per;
// }
// const rahul= newFunction(75,86,92);
// console.log(rahul);

//THIS METHOD
// const objuser = {
//     name: "Rahul",
//     age: 24,
//     msg: function username(){
//         return `welcome ${this.name}`;
//     } 
// };
// console.log(objuser.msg());
// objuser.name = "kunal";
// console.log(objuser.msg());

//ARROW FUNCTION
//implicit return
const add = (a,b) => a+b;
console.log(add(5,7));

const sqr = (num) => {
    return num*num;
};
console.log(sqr(5));

//expilicit return
const add1 = (a,b) => {
    let c = a+b;
    return c;
};
console.log(add1(7,10));

