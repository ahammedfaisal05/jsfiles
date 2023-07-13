/**get gpa for marks*/
//function declaration...
/*function getgpa(marks){
    let gpa;
    if(marks >= 0 && marks < 33){
        gpa = 0;
    }else if(marks >= 33 && marks < 40){
        gpa = 1;
    }else if(marks >= 40 && marks < 50){
        gpa = 2;
    }else if(marks >= 50 && marks < 60){
        gpa = 3;
    }else if(marks >= 60 && marks < 70){
        gpa = 3.5;
    }else if(marks >= 70 && marks < 80){
        gpa = 4;
    }else if(marks >= 80 && marks <= 100){
        gpa = 5;
    }
    return gpa;
}*/
/** get grade for markes*/
/*function getGrade(marks){
    let grade;
    if(marks >= 0 && marks < 33){
        grade = 'F';
    }else if(marks >= 33 && marks < 40){
        grade = 'D';
    }else if(marks >= 40 && marks < 50){
        grade = 'C';
    }else if(marks >= 50 && marks < 60){
        grade = 'B';
    }else if(marks >= 60 && marks < 70){
        grade = 'A-';
    }else if(marks >= 70 && marks < 80){
        grade = 'A';
    }else if(marks >= 80 && marks <= 100){
        grade = 'A+';
    }
    return grade;
}*/

/**age cal*/
//function decliration........
/*function agecal(name, age){
    let manush;
    if(age >= 0 && age < 5){
        manush = 'Baccha';
    }else if(age >= 5 && age < 10){
        manush = 'Balok';
    }else if(age >= 10 && age < 18){
        manush = 'kisor';
    }else if(age >= 18 && age < 30){
        manush = 'Jubok';
    }else if(age >= 30 && age < 40){
        manush = 'Togboge jubok';
    }else if(age >= 40 && age < 50){
        manush = 'Uncle';
    }else if(age >= 50 && age < 70){
        manush = 'briddho';
    }else if(age >= 70){
        manush = 'onk bora';
    }
    console.log(`
    Hi ${name}, You are a ${manush} manush.
`);
}*/

/**agecal */
// Arrow function.......
  /*  const agecal = (name , year) =>{
        let age = 2023-year;
        console.log(`my name is ${name}, I am ${age} years old`);
    }*/

/** currency converter*/
//function declaration.......
/*function currencyconvert(amount,type){
    let rate = 0;
    switch(type){
        case 'USD':
            rate = 108;
            break;
        case 'CAD':
            rate = 68;
            break;
        case 'POUND':
            rate = 114;
            break;
        case 'EURO':
            rate = 99;
            break;
        case 'INDIAN RUPI':
            rate = 2;
            break;
    }
    console.log(`
        ${amount} ${type} = ${amount*rate} BDT.
    `);
}*/

/**
 * BMI test
 */
//function declaration.....
/*function BMItest(name, weight, height){
    let bmi = weight / (height * height);
    if(bmi < 18.5){
        console.log(`
            Hello ${name}, apnar obostha kharap,samne ja paben tai khben.
        `);
    }else if(bmi > 18.5 && bmi <= 25){
        console.log(`
        Hello ${name}, apni normal achen, no tension.
        `); 
    }else if(bmi > 25 && bmi <= 30){
        console.log(`
        Hello ${name}, apni normal nai, sabdhan hon.
        `); 
    }else if(bmi >=30 ){
        console.log(`
        Hello ${name}, Obostha khub e kharap, exercise and diat koron jorori.
        `); 
    }
}*/

// 1.//function declaration
// function agecal(name){
//     return `hi my name is ${name}`;
// }
// 2.//function expression
// let agecal = function(name){
//     return `hi my name is ${name}`;
// }
// 3.//Arrow function
// let agecal = () => {
//     return `hi my name is ${name}`;
// }

//arrow function...
/*const Devsinfo = (name, skills, age) =>{
    return(`Hello your name is ${name}, you are ${age} years old, you are ${skills} developers`);
}
console.log(Devsinfo('faisal','MERNnnnn',34));*/

/** Ractangle & triangle area...Arrow function..*/ 
const areacal = (type, val1, val2) =>{
    let shape ='';
    let area ='';
    switch(type){
        case 'r':
            shape = 'Ractangle';
            area = (val1 * val2);
            break

        case 't':
            shape = 'Triangle';
            area = (.5 * val1 * val2);
            break

        case 's':
            shape = 'Square';
            area = (val1 * val1);
            break

        case 'c':
            shape = 'Circle';
            area = 3.1416 * (val1 * val1);
            break
    }
    return(`This is ${shape} and it's area is ${area}`)
}