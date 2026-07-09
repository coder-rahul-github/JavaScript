// console.log("order food");
// setTimeout(()=>{
//     console.log("order getting ready");
// },3000);
// console.log("next order");

let loading =0
let complete=setInterval(() => {
    console.log(`loading ${loading}%`);
    loading += 10
    if(loading>100){
        clearInterval(complete)
        console.log("loading completed");
    }
},3000);