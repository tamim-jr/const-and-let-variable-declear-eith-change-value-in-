const wife = "my wife";
console.log(wife);

const ageValue = [15, 45, 84];
console.log(ageValue);
ageValue[2] = 12;
console.log(ageValue);
ageValue.push(44); 
console.log(ageValue);

const hero = {name: "sakib Khan", age: 38, phone: 4875958}
console.log("First Hero info ", hero);
hero.name = ("Ayman Sadik");
hero.age = 26;
hero.phone = 987654;
console.log("Last Hero info ", hero);

let patientName = "Rohim Chacha";
patientName = "Fatema Kkhala";
console.log(patientName);

//use let and const properly

//when you use let then it works only inside of a function.
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i);

//when you use var then it works all over the program.
let sumOne = 0;
for (var i = 0; i < 10; i++) {
    sumOne = sumOne + i;
}
console.log(i);