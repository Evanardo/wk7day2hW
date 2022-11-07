// let person2 = {
//     name: "Max",
//     age: 31,
//     prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
//     fav_color: 'Blue',
//     teams: [
//         {
//             baseball: 'Chicago White Sox',
//             football: 'Chicago Bears',
//             hockey: 'Chicago Blackhawks',
//             basketball: ['Chicago Bulls', 'Chicago Sky'],
//             soccer: ['Chicago Fire', 'Naperville Yellowjacks']
//         },
//         {
//             baseball: 'Toronto Bluejays',
//             football: 'LA Rams',
//             basketball: 'Milwalkee Bucks',
//             soccer: ['Manchester United', 'Liverpool']
//         }
//     ]
// }

// console.log(person2.prog_languages[2]);
// console.log(person2.teams[1].soccer[0]);
// console.log(Object.keys(person2));
// console.log(Object.values(person2));
// for(let i = 0; i < person2.length; i++){
//     console.log(person2[i])
// };
// for(let i = 0; i < Object.keys(person2).length; i++){
//     console.log(Object.keys(person2)[i])
// };
// for(let i = 0; i < Object.keys(person2).length; i++){
//     if(Array.isArray(Object.values(person2)[i])){
//         console.log(Object.values(person2)[i])
//     }
// };

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods(person){
    for(let food in person){
        if (person[food][0] instanceof Object){
            console.log(`\nMy favorite ${food}s are:`);
            for (let place in person[food][0]){
                console.log(`\nMy favorite treat is: ${person[food][0][place]} from ${place}.`);
            };
        }else if (person[food][0] instanceof Array){
            console.log(`\nMy favorite foods are: ${food}s`);
            for (let dish of person[food][0]){
                console.log(`${dish}`);
            }
        }else{
            console.log(`\nMy favorite ${food} is: ${person[food]}`);
        };
    };
};

console.log(favFoods(person3));

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;

        this.printInfo = ()=>{
            console.log(`This is ${this.name}, they are ${this.age} years old.`)
        };
    }
    addAge(){
        this.age += 1;
        console.log(`This is their new age after 365 days ${this.age}`)
    };
};

let person1 = new Person("Evan", 35);
person1.printInfo();
person1.addAge();


let checkWordSize = (str) => {
    return new Promise((resolve, reject)=>{
        if (str.length > 10){
            resolve(str);
        } else {
            reject(str);
        }
    })
    .then(()=>{
        console.log("BIG WORD");
    }).catch(()=>{
        console.log("small word");
    })
};

checkWordSize("This is going to be longer that 10 because that's what's required.")
checkWordSize("supercalifragilisticexpialidocious")
checkWordSize("Evan")