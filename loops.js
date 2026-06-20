// let i=10;
// while (i>=10);{
//     console.log(i)
//     i--;
// }

// let number = 1234
// let reverse = 0;
// while (number >0){
//     req= number%10;
//     reverse = reverse*10+req;
//     number = Math.floor(number/10);
// };
// console.log(reverse);

// function passwordgenerator(length){
//     let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_";

//     let password = "";
//     for (index=0;index<=length;index++){
//         let randomindex = Math.floor(Math.random()*character.length)
//         password=password+character[randomindex]
    
//     };
//     return password;
// };
// console.log(passwordgenerator(15));
function passwordgenerator(length){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let number = "1234567890"
    let splchar="!@#$%^&*_"

    let combine = upper+lower+number+splchar;

    let password = "";
    for (i=0;i<=length;i++){
        let randomi = Math.floor(Math.random()*character.length)
        password=password+character[randomi]
    
    };
    return password;
};
console.log(passwordgenerator(15));
