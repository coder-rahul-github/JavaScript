//Q- Create variables for string, number, boolean, undefined, null, object, and array. Print their data types

// let a= 1;
// let b="Rahul"
// let c= null
// let d= [1,2,3,4]
// let e= undefined
// let f= true
// const g =["cat","dog"]
// console.log( typeof a,"\n", typeof b,"\n",typeof c,"\n", typeof d,"\n",typeof e,"\n", typeof f, "\n",typeof Array.isArray(g));

//---------------------------------------------------------------------------------------
// Q- Create two variables and swap their values using a third variable.

// let a=6
// let b=5
// let c=0
// c=a
// a=b
// b=c
// console.log(a,b);

//---------------------------------------------------------------------------------------
//Q- Swap two numbers without using a third variable.

// let a=4;
// let b=5;
// [a,b]=[b,a];
// console.log(a,b);

//---------------------------------------------------------------------------------------
//Q- Convert a string '100' into a number and add 50

// let a='100';
// console.log(Number(a)+50);

//---------------------------------------------------------------------------------------
//Q- Convert number 500 into a string.

// let a= 100
// console.log(typeof String(a))

//---------------------------------------------------------------------------------------
//Q- Check the output of: '5' + 2, '5' - 2, true + 1, false + '1'.

//console.log('5' + 2, '5' - 2, true + 1, false + '1');

//---------------------------------------------------------------------------------------
//Q- Find largest among 3 numbers using if-else.

// let a=6
// let b=7
// let c=10

// if ((a>b && b>c)||(a>c && c>b)){
//     console.log(`${a} is greater`);
// }
// else if ((b>c && c>a)||(b>a && a>c)){
//     console.log(`${b} is greater`);
// }
// else{
//     console.log(`${c} is greater`);
// }

//---------------------------------------------------------------------------------------
//Q- Check whether a number is even or odd.

// let a=5

// if (a%2==0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`)
// }

//Q-14 

let a=45;
let b=0;
while(a>0){
    let c=a%10;
    b=b*10+c;
    a=Math.floor(a/10);
}
console.log(b);