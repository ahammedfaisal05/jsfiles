//Object Data struture 
/*
const student ={
    Name :'Faisal',
    Level : 'six',
    Roll : 2,
    Age : 12,
}
console.log(student.Roll);
*/
//---------------------------------------------
//Multipal object data structure..
let Devs = [
    {
        Name : 'Faisal',
        skill : 'IOS DEVELOPER',
        Stage : 'Begineer',
        age : 12,
        emali :'faisal@gmail.com',
    },
    {
        Name : 'Robin',
        skill : 'cyber security DEVELOPER',
        Stage : 'Begineer',
        age : 15,
        emali :'robin@gmail.com',
    },
    {
        Name : 'Tasin',
        skill : 'React DEVELOPER',
        Stage : 'Begineer',
        age : 16,
        emali :'tasin@gmail.com',
    },
    {
        Name : 'Sahadat',
        skill : 'plambing DEVELOPER',
        Stage : 'Begineer',
        age : 17,
        emali :'shahadat@gmail.com',
    },
    {
        Name : 'Anik',
        skill : 'IOS DEVELOPER',
        Stage : 'Begineer',
        age : 19,
        emali :'anik@gmail.com',
        marks : {
            bn : 19,
            en : 35,
            math : 56,
            social : 67,
            relig : 89,
            physics : 78,
            Result : {
                msg : 'apni bn e fail',
                output : 'seshhhhhh'
            }
        }
    },
]
     
    
    Devs.map((data, index) =>{
       /* for(let i = 0; i < Devs.length; i++){
            console.log(Devs[i]);
        }//using for loop
        */

        /*
        if(data.skill == "IOS DEVELOPER"){
            console.log(`My name is ${data.Name} & age is ${data.age} , My skill is ${data.skill}, profession lavel is ${data.Stage} and email is ${data.emali}`);
        } // single object output
        */
        
        /*console.log(`My name is ${data.Name} & age is ${data.age} , My skill is ${data.skill}, profession lavel is ${data.Stage} and email is ${data.emali}`);
        // multiple objects output
        */
    });
     
        /*
        for(data in Devs){
            console.log(data);
        }//using for in loop, jekhane amra just index number gulo pabo
        */

        /*
        for(data of Devs){
            console.log(data.Name);
        }//using for of loop, jekahane amra data golo OBJECT AKARE pabo
        */

        for(data of Devs){
            if(data.emali == 'anik@gmail.com'){
                console.log(data.marks.Result.output);
            }
        }