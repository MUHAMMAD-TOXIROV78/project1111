"use strict";
 

let person={
    name:"Davlat",
    age:"22",
    job:"Programma",

    hobbies:{
        firstH:"Desiginer",
        secondH:"Copyrighter"
    }
};

let jsonFile=JSON.stringify(person);

obj.nick="coder";

let obj=JSON.parse(jsonFile);

console.log(person);
console.log(jsonFile);
console.log(obj);