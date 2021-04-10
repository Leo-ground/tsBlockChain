"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
// interface Human{
//    name:string,
//    age:number,
//    gender:string;
// }
// const person = {
//    name:"nicolas",
//    age: 22,
//    gender:"male"
// }
const lynn = new Human("Lynn", 18, "female");
const syaHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!!!`;
};
console.log(syaHi(lynn));
//# sourceMappingURL=index%20copy.js.map