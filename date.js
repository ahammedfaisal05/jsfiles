const month = ['January','February','March','April','May','Jun','July','August','September','October','Nobember','December'];
const days = ['sunday','monday','tuesday','wednesday','thersday','friday','saterday'];
let date = new Date();// new Date , atak ekta constractor ba object bole

let hour = 0;
let ampm = 0;

if(date.getHours() > 12){
    ampm = 'PM';
    hour = date.getHours() - 12;
}else{
    ampm = 'AM';
    hour = date.getHours();
}
console.log(`
    ${ hour === 0 ? 12 : hour }:${date.getMinutes()}:${date.getSeconds()}:${ampm}
    ${month[date.getMonth()]}// month ber korar jonno arry us kora hoyeche; ${date.getDate()}, ${date.getFullYear()}
    ${date.getTime()} //1970 sal theke present time porjonto milisecende count kora hoy;
    ${days[date.getDay()]}// week name ber korar method;
`);