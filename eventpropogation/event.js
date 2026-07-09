const grandparent = document.querySelector("#grandparent")
const parent = document.querySelector("#parent")
const childbtn = document.querySelector("#child")

grandparent.addEventListener("click", () =>{
console.log("grandparent clicked");
});
parent.addEventListener("click", () =>{
console.log("parent clicked");
});
childbtn.addEventListener("click", () =>{
console.log("child clicked");

});