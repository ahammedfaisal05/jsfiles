/**DOM selector */
/*
getElementById() //single element dibe.
getElementsByClassName() //multiple element dibe.
getElementsByTagName() //multiple element dibe.
querySelector() //single element dibe.
querySelectorAll() //multiple element dibe.

console.log(document.querySelector("#box")); // querySelector always single element return kore, mani same name e akadik class name thakle qureySelector 1st class er element tai return korbe.
console.log(document.querySelectorAll('.fox'));
*/


/**DOM property & methods */
/*
console.log(document.querySelector('h1').innerHTML);
console.log(document.querySelector('h1').innerText);
console.log(document.querySelector('h1').textContent);
// ai 3 ta propertyr maddhome jkono tag er moddhe thka value gulo k dhorte pari,abr ai 3 ta property diye e jkno tag er moddhe noton valu set kore dite pari.
ex: <h1>we love js</h1>
let h1 = document.querySelector('h1').innerHTML = 'We are Devs';
let h1 = document.querySelector('h1').innerText = 'We are Devs';
let h1 = document.querySelector('h1').textContent = 'We are Devs';
console.log(h1);
*/

/*
const p = document.querySelectorAll('p');
p.forEach((item)=>{
        item.innerHTML = 'Bangladesh';
    });//HTML collection gulok dore dore kaj korar jonno forEach use korte hobe, map use korle use hobe na.

p.forEach((item)=>{
     item.innerHTML ==='lao'? item.innerHTML = 'kodooo' : '';//ternary operator use kore kora jay.
})
*/

const h1 = document.querySelector('h1');
h1.style.color = 'red';
h1.style.fontFamily = 'arial';
h1.style.fontSize = '100px';