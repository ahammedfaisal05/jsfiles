// spreed operator array and object 2 jaygay e use kora jay.

/*
let devs = {
    name : 'KARIM',
    age : 12,
    skill : 'MERN'
}

devs = {
    ...devs, //spreed operator
    skill : 'IOS'
}
console.log(devs);
*/

/*
const student = [
    {
        name : 'gikeey',
        age : 123
    },    
    {
        name : 'shows',
        age : 123
    },    
]

student[1] = {
    ...student[1],
    age : 130
}
console.log(student[1]);
*/



/** OBJECT DESTRUCTURING */
const student = {
    name : "faisal",
    age : 14,
    skill : "MERN",
    edu : {
        psc : 4,
        jsc : 3,
        ssc : 4.56,
        HSC : 4.42
    }
}

const {name,age,skill} = student;// Its object destructuring system.
const {psc,jsc,ssc,HSC} = student.edu; //object destructuring system.
//Main kotha , boro ekta chain k venge choto ekta formate a nia asai hocche destructuring..

console.log(`
    Name: ${name}
    age: ${age}
    skill: ${skill} 
    --------------------------
    EDU = psc = ${psc}
    EDU = jsc = ${jsc}
    EDU = psc = ${ssc}
    EDU = psc = ${HSC}
`);


/**ARRAY DESTRUCTURING */
const food = ['alo', 'potol', 'lao'];

const [food1, ,food2] = food; //Array destructuring , array te sadin ,variable er name ja khusui neya jabe,just position ta thik rakhte hobe.
//ar object er key er name dore dore kaj kora lagbe. 
console.log(food2);// so output asbe 'lao'.
//Array destructuring er concept hocche , valu gulo k alada variable e joma kore felbo , jeno aigula k easily use kora jay.
//ar jodi amra sob gula valu k access korte cai , tahole loop calabo ba join() ba toString() method use krbo.


/**Error handeling */
//kio();  //kio function ta try() block er bahire tai error ta consol e red color asbe. mane  browser error ta handle krbe. 
try{
    kio() // try() block er vitore , ata k custom error handling bole.
}catch(err){
    console.log(err);
}
// jodi kono application crush kore, api or server down or crush kore tahole whole app e error dekhabe, ata fix korar jonno try{}catch(){} block diye custmizly error handle kor hoy. 
// try,catch block er ekta problem hocche multiple error asle, ata shudo first error key count korbe, baki gula korbe na , ekta ekta kore error fix korte hoy ,all error at a time dekhabe  na.