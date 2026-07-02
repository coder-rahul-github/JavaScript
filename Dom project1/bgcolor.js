const btn=document.getElementById('bg-color')
console.log(btn);

const color=['red','green','blue','black','orange','aqua']
btn.addEventListener("click",()=>{
    //const randomcolor= Math.floor(Math.random()*color.length)
    const randomcolor1= Math.floor(Math.random()*256)
    const randomcolor2= Math.floor(Math.random()*256)
    const randomcolor3= Math.floor(Math.random()*256)
    //console.log(color[randomcolor]);
    console.log(`rgb(${randomcolor1},${randomcolor2},${randomcolor3})`);
    
    //document.body.style.backgroundColor=color[randomcolor];
    document.body.style.backgroundColor=`rgb(${randomcolor1},${randomcolor2},${randomcolor3})`
})
