/**Regulae Expraction*/
//------------------------
let txt = "I am MERN, he is IOS, my fd is Android developer";
let pattern = /(mern|react|angular)/i; /*pattern bananor system(/grehg/;)This is the way of regular expression.its also a case sensetive.
Case insensetive korar jonno i use korte hoy. ex: /Developer/i;
poro pattern er moddhe kokhonoi kono jaygay unusual space use korte parbo na.
/^android developer bangladesh$/, ^ ai carate sign diye mean kore pattern er vitore sorotei android developer likhata thkte hobe,
ar $ doller sign diye ending point mean kore, orthad ^$ sign gulor vitore ja thakbe tai hole true return korbe output e.
*/

/*
let text ="Dh2ka";
let ptrn = /^Dh.ka$/i; //dot . use kore any kind of character use kora jay,ex: "Dh2ka", any character also space.
let ptrn = /^Dh.*ka$/i;//.* use korle amra any kind of character use korte pari , ar * use kore character ta skip kora jabe.ex: "Dhka",abr "Dh ka",abr "Dh grejg fjd 43 ka" use kote pari , output true return korbe.
let ptrn = /^Dh[a-zA-Z0-9 !@#$%^&*()_+]ka$/; //ekhon pattern e jetai use kori output true asbe, tobe ekta character change koera jabe. space o ekta character. ex: "Dh%ka", output true.
let ptrn = /^Dh[a-zA-Z0-9 !@#$%^&*()_+]*ka$/; //ekhon pattern e jetai use kori output true asbe, kinto ekhon *sign er jonn onkgula character change koera jabe.ex: "Dh%%^^&*@@@ka", output true.
let ptrn = /^Dh[a-zA-Z0-9 !@#$%^&*()_+]{3}ka$/; //{3} mean pattern must 3 ta character bosite hobe.ex:"Dh@!$aka"
let ptrn = /^Dh[a-zA-Z0-9 !@#$%^&*()_+]{3,}ka$/; //{3,} mean pattern e minimum 3ta chtr ar , er por kichu na thakay maximum unlimited character bosano jabe. ex:"Dh@!$^&%$##**&^%aka"
let ptrn = /^Dh[a-zA-Z0-9 !@#$%^&*()_+]{3,5}ka$/; //{3,5} mean pattern e minimum 3ta chtr ar maximum 5 character bosaile output true asbe, noyto false asbe. ex:"Dh@!$aka" output true and ex:"Dh@!$^@aka" output true.
*/

/*
let text ="";
let ptrn = /^[a-z]{2,5}$/; // minimum 2, maximum 5 ta lower case use korle output true asbe.
let ptrn = /^[^a-z]*$/; // [^a-z] mean lower case er a-z chara baki sob use kora jabe. 
let ptrn = /^[^!@#$%^&*()_+]*$/; //[^] third bracket er vitore caret sign mean bracket er vitore ja character thakbe ta chara baki sob.
*/

/*
let text = "+8801910890116"
let ptrn = /^(\+8801|01|008801)[0-9]{9}$/; // ekhane \ backword slace skip korar orthe use kora hoy. jmn + sing ta regular expression er default sign k cqarry kore, ata k skip korar jonno \ use kora hoy.
*/
console.log(pattern.test(txt));