//for,fro in ,fro of ,for each
let person = {
    "firstName": "Jackie",
    "lastName": "chan",
    "age": 25
};
//For loop
console.group("for loop");
let keys = Object.keys(person);
for (var i = 0; i< keys.length ; i++){
    console.log(`${keys[i]} is ${person[keys[i]]}`);
}
console.groupEnd();
//for in loop
console.group("for in loop");
for (let x in person){
    console.log(`${x} is ${person[x]}`);
}
console.groupEnd();
//for of loop
console.group("for of loop");
for (var [a,b] of Object.entries(person)){
    console.log(`${b} is a ${a}`);
}
console.groupEnd();
console.group("for each loop");
Object.entries(person).forEach((a) => console.log(a));
console.groupEnd();


