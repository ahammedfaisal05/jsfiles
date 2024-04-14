
const Deves = [
    {
        id : 1,
        name : "Faisal",
        dprtmnt : "CSE",
        age : 26,
        skill :   "MERN DEVELOPER"
    },

    {
        id : 2,
        name : "Tasin",
        dprtmnt : "CSE",
        age : 27,
        skill :   "IOS DEVELOPER"
    },
    {
        id : 3,
        name : "Shahadat",
        dprtmnt : "English",
        age : 28,
        skill :  "Plamber"
    },
    {
        id : 4,
        name : "Robin",
        dprtmnt : "CSE",
        age : 28,
        skill :  "Cybr secr DEVELOPER"
    },
    {
        id : 5,
        name : "Anik",
        dprtmnt : "CSE",
        age : 28,
        skill :  "Android DEVELOPER"
    }
]

console.log(JSON.stringify(Deves));// to convert object data to JSON string.

let data = `[{"id":1,"name":"Faisal","dprtmnt":"CSE","age":26,"skill":"MERN DEVELOPER"},{"id":2,"name":"Tasin","dprtmnt":"CSE","age":27,"skill":"IOS DEVELOPER"},{"id":3,"name":"Shahadat","dprtmnt":"English","age":28,"skill":"Plamber"},{"id":4,"name":"Robin","dprtmnt":"CSE","age":28,"skill":"Cybr secr DEVELOPER"},{"id":5,"name":"Anik","dprtmnt":"CSE","age":28,"skill":"Android DEVELOPER"}]`
console.log(JSON.parse(data));//to convert JSON string to object data.