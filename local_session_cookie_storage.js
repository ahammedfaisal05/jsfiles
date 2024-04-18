/*
localStorage.setItem('name','Faisal ahammed sagor');
localStorage.setItem('age',26);
localStorage.setItem('skill','MERN DEVS');
//localSorage er data ajibon theke jabe jodi manually delete na kora hoy.

    //console.log(localStorage.getItem('name')); 
    //console.log(localStorage.getItem('age')); 
    //console.log(localStorage.getItem('skill')); 
console.log(localStorage.removeItem('skill'));
console.log(localStorage.removeItem('age'));
console.log(localStorage.removeItem('name'))
//setItem diye data k store kore and getItem diye data k call kore and removeItem diye data remove kore.
*/


/*
sessionStorage.setItem('food','alo');
sessionStorage.setItem('color','red');
sessionStorage.setItem('game','cricket');
 //sessionStorage er data browser theke ber hoye gelei data kete jabe, remove hoye jabe.
*/


/*
const Deves = [
    {
        name : "Faisal",
        id : 1,
        skill : "MERN"
    },
    {
        name : "Robin",
        id : 2,
        skill : "cys"
    },
    {
        name : "shahadat",
        id : 3,
        skill : "android"
    },
    {
        name : "tasin",
        id : 4,
        skill : "ios"
    },
];

localStorage.setItem('Deves', JSON.stringify(Deves)); // ekhon data gulo browser e store hoye gese,ekhon code golo kete dileo data gulo browser e local storage e theke jabe.
*/

/*
let data = JSON.parse(localStorage.getItem('Deves'));
   data.map((data, index)=> {
    console.log(`
        Name : ${data.name}, ID : ${data.id}, skill : ${data.skill}
    `); 
   });
*/ // eivabe localstorage theke data fatch kore looping kora jay.

/*
document.cookie = "Name=faisal";
document.cookie = "Age=344";
document.cookie = "Skill=MERN";
console.log(document.cookie);//code kete dileo cookie te data joma thake. 

document.cookie = "Name=''";
document.cookie = "Age=''";
document.cookie = "Skill=''";//this is the system of data remove of cookie.
*/