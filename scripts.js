

//#region TERNÁLIS és SWITCH
/*
var belekora = 27

var felnott = false;
if (belekora >= 18) {
    console.log('Béla felnőtt');
} else {
    console.log('NEM')
}
//TERNÁLIS operátor
belekora >= 18 ? console.log('IGEN') : console.log('NEM');
var felVAGYgyer = belekora >= 18 ? console.log('IGEN') : console.log('NEM');
//SWITCH
var film = 'Terminator';
var mufaj;

switch(film){
    case 'Shrek':
        mufaj = 'mese';
        break;
    case 'Terminator':
        mufaj = 'Akcio';
        break;
    default:
        mufaj = 'Besorolatlan'
}
console.log(mufaj)

var kor = 30;
switch(true){
    case kor < 12:
        console.log('kicsi');
        break;
    case kor >12 && kor < 21:
        console.log('közepes');
        break;
    case kor >= 21:
        console.log('nagy');
        break;
    default:
        console.log('???');
}
*/
//#endregion

//#region IF ELSE szerkezet
/*
var f = 33;
var n = 45;
if (f > n) {
    console.log('kolbász')
} else {
    console.log('torta')
}
*/
//#endregion

/* //var, let, const

var nev = 'Pisti'; //Globális, függvényszintű változó, elérhető a teljes programban
function teszt(){
    var x = 5; //Amit függvényen belül definiálunk, akkor máshonnan nem látható, lokális változó, viszont blokk nem korlátozza
}
teszt();

var y = 10;
{
    let y = 20; //Blokkon belül látható csak, ott érvényes
    console.log(y);
}
console.log(y);

//Cikluson belül
var i = 2;
for (let i = 0; i < 8; i++){
    console.log(i) //Blokkon belül marad!
}
console.log(i);
var nev;
nev = 'Pisti';
console.log(nev);

//#region CONST, nagybetűvel írjuk
const SZIN = '#FFFFFF'; //Kötelező értéket adni neki
const SZAM = 100;
const NEV = {
    kereszt: 'Pistike',
    vezetek: 'Nagy',
};
NEV.kereszt = 'Jóska'; //Így adható új érték
NEV.koe = 32;
console.log(NEV.kereszt)
//#endregion
*/

/* //Matematikai operátorok

var osszeg = 10 + 33;
console.log(osszeg);
console.log(typeof osszeg);
*/

/* //Típuskényszerítés, összefűzés

var keresztNev = 'Pisti';
var kor = 32;
console.log(keresztNev + ' ' + kor);
var vezeteknev, felnott;
vezeteknev = 'Kis';
felnott = true;
console.log(vezeteknev + ' ? ' + felnott)
kor = 'harmincketto';
console.log(keresztNev + ' ' + kor);
*/

/* VÁLTOZÓK:

var keresztNev = 'Pisti';
var vezetekNev = 'Kis';
var kor = 32;
var nagykoru = true;
var magassag;
console.log("Hello! ", keresztNev);

Egyszerű változók:
Number (lebegőpontos)
String
Boolean
undefined
null
*/

