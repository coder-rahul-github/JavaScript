// const arr=[1,2,3,4,5]
// arr.forEach((element,i) => {
//     //console.log(`array element ${element},index${i}`);
// });

// count=0
// arr.forEach((element)=>{
//     sum=count+element
//     count=sum
// });
// //console.log(count);
// arr1=[]
// arr.forEach((element)=>{
//     sqrt=element*element
//     arr1.push(sqrt)
// });
// console.log(arr1);

// const result=arr.map((element)=>{
//     return element*element
    
// });
// //console.log(result);

// // for(let print of arr){
// //     console.log(print);
    
// //};

// // for(let [index,element] of arr.entries()){
// //     console.log(`element is ${element} at index ${index}`);
    
// // };

arr=[1,2,4,4,6,7]
even=0
odd=0
arr.forEach((element) => {
    if (element%2==0){
        even+=1
    }
    else{
        odd=odd+1
    }
});
//console.log(`even is ${even} and odd is ${odd}`);

const convert=arr.map(num=>String(num))
//console.log(convert);

const addnum=arr.map(num=>num+10)
//console.log(addnum);

const cart=["apple","mango","orange","mango","apple"]
const arrfruits=cart.reduce((accum,fruitElement)=>{
    if (accum[fruitElement]){
        accum[fruitElement]++;
    }
    else
        accum[fruitElement]=1
    return accum;
});
//console.log(arrfruits);

let products=[
    {name:"Laptop",price:70000,available:true},
    {name:"phone",price:30000,available:false},
    {name:"TV",price:90000,available:true},
];
//find products
//*which are available?
//*total 
//*prices>30000


//for of
const number =[1,2,3,4,5]
for (const num of number) {
    //console.log(num);
    
}

const greeting="hello world"
for (const greet of greeting) {
    if (greet==" "){
        break
    }
    //console.log(`each character is ${greet}`);
    
}
 //map

 const map= new Map()
 map.set('IN','INDIA');
 map.set('EU','EUROPE');
 map.set('SA','SOUTH AFRICA');
 map.set('IN','INDIA');
 console.log(map);

for (const [key,value] of map) {
    console.log(key, ":-", value);
}

 const names= { 'game1' : 'nfs', 
    'game2' : 'GTA'
    }
for (const [key,value] of names) {
    
    console.log(key,":-", value);
}
