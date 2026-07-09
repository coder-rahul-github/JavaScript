function name(uName){
    console.log(`hello ${uName}`);
    
}
//name("Rahul");
function age(uAge){
    uAge("you are 24 years old");
    
}
// age(name);

function login(uLogin){
    setTimeout(() => {
        console.log("login succesful");
        uLogin("hi login");
        
    }, 2000);
}
function getProfile(callback){
    setTimeout(() => {
        console.log("profile loaded");
        callback("hi profile");
        
    }, 1000);
}
function getPost(callback){
    setTimeout(() => {
        console.log("post loaded");
        callback("hi post");
        
    }, 1000);
}
function getComment(callback){
    setTimeout(() => {
        console.log("comment loaded");
        callback("hi comment");
        
    }, 1000);
}
login(function (){
    getProfile(function (){
        getPost(function (){
            getComment(function (){
                setTimeout(() => {
                    console.log("completed");
                    
                }, 1000);
                
            });
        });
    });
});