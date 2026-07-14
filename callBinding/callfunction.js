const student = {
    uname : "rahul",
    age:24,
    intro : function () {
        console.log(`${this.uname} is ${this.age} years old`);
    },
};
student.intro()
//setTimeout(student.intro.bind(student),2000);
/////////////////////////////////////////
const student1={
    name : "rahul",
    age : 23,
};
const student2={
    name:"akash",
    age:22,
};
function greet(city){
    
    console.log(`${this.name} is ${this.age} years old and is from ${city}`);
    
}
// greet.call(student1,"balia");
// greet.apply(student2,["gorakpur"]);
//setTimeout(student2.greet.bind(student2),2000);
greet.student2("raipur");