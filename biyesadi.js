let name = prompt('Name?');
let age = prompt('Age?');
let gender = prompt('Gender?');

let biyer_boyosh = 0;
let somman = '';

switch(gender){
    case 'Male':
        biyer_boyosh = 21;
        somman ='vaiyyaaa';
        break;

    case 'Female':
        biyer_boyosh = 18;
        somman ='apuuuuu';
        break;
        
}

if(age >= biyer_boyosh){
    console.log(`Hi ${name} ${somman} apnar biyer boyosh hoyeche.`);
}else{
    console.log(`Hello ${name} ${somman} apni wait koron biyer jonno.`);
}