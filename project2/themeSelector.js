const btn=document.querySelector("#darkTheme")
console.log(btn);
btn.addEventListener("click",()=>{
if(document.body.classList.toggle("dark")){
    btn.textContent="light mode";
}
else{
    btn.textContent="dark mode";
}

});
