//Introducing function
// Insides value of function name introducingME() is called parameter. 
function introducingME(username, userdesignation, age){
    console.log(`Hi, I am ${username || 'man'}, I am a ${userdesignation || 'Error!'}, I am in ${age || 0} years old`);
}
//                     Function call
// // const returnValue = introducingME()
introducingME('Faisal', 'Software Enginner', 25);// Insides value of () is called arguments.
introducingME('Ahammed', 'Textile Engineer', 27);// Insides value of () is called arguments.
introducingME();// Insides value of () is called arguments.
