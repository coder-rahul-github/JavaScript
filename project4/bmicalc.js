const form=document.querySelector("form")
form.addEventListener("submit", 
    function(event){
        event.preventDefault();
        const height=parseInt(document.querySelector("#height").value)
        
        const weight=parseInt(document.querySelector("#weight").value)
        console.log(height,weight);
        if(height===0||height<=0||isNaN(height)){
            result.innerHTML(`please enter valid number`)
        }
        else if(height===0||height<=0||isNaN(height)){
            result.innerHTML(`please enter valid number`)
        }
        else {
            const bmi=(weight/((height*height)/10000)).toFixed(2);
            result.innerHTML=bmi;
        
        if(bmi<18.6){
            result.innerHTML=`<br>your bmi is${bmi}</br>
            <p>you are under weight</p>`;
        }
        else if(bmi>18.6 && bmi<24.9){
            result.innerHTML=`<br>your bmi is${bmi}</br>
            <p>you are fit and fine</p>`;
        }
        else{
            result.innerHTML=`<br>your bmi is${bmi}</br>
            <p>you are over weight</p>`
        }
        }
    }
);