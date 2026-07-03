const inp=document.getElementById("addList");
const btn=document.getElementById("addToList");
const list=document.getElementById("list");
btn.addEventListener("click",()=>{
    const li=document.createElement("li")
    li.textContent= inp.value;
    list.appendChild(li);
    inp.value="";
});
