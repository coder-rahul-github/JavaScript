// let a=10
// const b= "rahul"
// console.log(a+b);


// const obj={name:"Rahul",
//     age:24,
// };
// console.log(`hello, my name is ${obj.name} and my age is ${obj.age} `)

// const user = [{name:"Rahul",
//     age:24,subject:"computer",city:"raipur"
// },{name:"Rohan",
//     age:23,subject:"AI",city:"raipur"},

// ];
// console.log(typeof user);

// const a =[1,2[3,4]]
// const b=[5,6]
// a.push(b);
// console.log(a);

// const arr= [1,2,3,4,5,6,7]
// console.log(arr[arr.length-1]);

// const arr1= ["rahul","shubham","kunal"]
// console.log(arr1.includes("rahul"));

// const arr2= "rahul is a developer"
// // console.log(arr2.toUpperCase());
// // console.log(arr2.toLowerCase());

// console.log(arr2.split(" ").length);

// const name= "Rahul Das"
// const year = 2001
// console.log(name.slice(0,4).concat(year));


//const random = Math.random()
//console.log(Math.floor(Math.random()*10))+1;

//  const num = Math.random()
// // console.log(num);

// const arr=["rahul","ayush","harsh","umar","ludo"]
// let minN=0
// let maxN=4
// const n = Math.floor(Math.random()*(maxN-minN+1)+minN)
// console.log(arr[n]);

//console.log(Math.floor(Math.random()*(6-1+1)+1));

// const red= Math.floor(Math.random()*(256-0+1)+0)
// const green = Math.floor(Math.random()*(256-0+1)+0)
// const blue = Math.floor(Math.random()*(256-0+1)+0)
// console.log(`rgb(${red},${green},${blue})`);

// const obj={name:"rahul",
//     age:24
// }
// if (Object.keys(obj).length ===0)
//     console.log("obj is empty");
// else console.log(`not empty ${Object.keys(obj).length}`);

// // nullish coalesing operator ?? :-
// let val1 = null ?? 10
// console.log(val1)
// let val2 = undefined ?? 25
// console.log(val2);

// //ternary operators

// 8>4 ? console.log(8):console.log(4);

//premium- 40%  standard -30%  basic -20%  if purchase>50000
let customer = "premium"
let purchase =55000
if(customer == 'premium' && purchase >= 50000)
    console.log("customer get 40% discount");
if(customer == 'std' && purchase >= 50000)
    console.log("customer get 30% discount");
if(customer == 'basic' && purchase >= 50000)
    console.log("customer get 20% discount");

