// promises - resolve , pending , reject

// let promise= new Promise(function (resolve,reject){
//     let success = true
//     if (success){
//         resolve("ho gya");
//     }
//     else{
//         reject("fas gya");
//     }
// });
// promise
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function(error){
//         console.log(error)
//     })
//     .finally(function(last){
//         console.log("bahar aaja");
        
//     });



new promisesOne (function(resolve,reject){
    setTimeout(function(){
        console.log(`hello Rahul`);
        resolve()
    },1000)
        
})
.then (function(){
     console.log(`event resolved`);
            
});