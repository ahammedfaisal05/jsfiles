let name = prompt('student name');
let clsname = prompt('student class');
let roll = prompt('student roll');
let bn = prompt('Bangla');
let en = prompt('English');
let math = prompt('mathamatics');
let s = prompt('Science');
let ss = prompt('Social Science');
let agrecl = prompt('Agreculture');
let reli = prompt('Religion');

console.log(`

    Name   : ${name}
    Class  : ${clsname}
    Roll   : ${roll}
    ------------------------------------------
    Subjects    Marks       GPA                 Grade
    Bangla      ${bn}       ${getgpa(bn)}       ${getGrade(bn)}
    English     ${en}       ${getgpa(en)}       ${getGrade(en)}
    Math        ${math}     ${getgpa(math)}     ${getGrade(math)}
    Science     ${s}        ${getgpa(s)}        ${getGrade(s)}
    S.Science   ${ss}       ${getgpa(ss)}       ${getGrade(ss)}
    Agreculture ${agrecl}   ${getgpa(agrecl)}   ${getGrade(agrecl)}
    Religion    ${reli}     ${getgpa(reli)}     ${getGrade(reli)}


`);