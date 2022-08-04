//#region Bind metódus
/*
var evek = [1954, 1991, 1993, 2000, 2001, 2002, 2003, 2005];

function tombMuvelet(tomb, fv) {
    var eredmeny = [];

    for (var i=0; i < tomb.length; i++) {
        eredmeny.push(fv(tomb[i]));
    }
    return eredmeny;
}

function korSzamitas(elem) {
    return 2022 - elem;
}

function felnott(korhatar, elem) {
    return elem >= korhatar;
}

var korok = tombMuvelet(evek, korSzamitas)
console.log(korok);

var felnottKorJapanba = tombMuvelet(korok, felnott.bind(this, 20));

console.log(felnottKorJapanba);

*/
//#endregion

//#region Apply, blind, call
/*
var odon = {
    nev: 'Ödön',
    kor: 45,
    foglalkozas: 'csillagász',
    udvozles: function(stilus, napszak) {
        if (stilus === 'hivatalos'){
            console.log('Üdvözlöm, jó ' + napszak + ' kívánok! ' + this.nev + ' vagyok.');
        } else if (stilus ==='baráti') {
            console.log('Szia, jó ' + napszak);
        }
    }
}

odon.udvozles('hivatalos', 'reggelt')
odon.udvozles('baráti', 'napot')

var bela = {
    nev: 'Béla',
    kor: 55,
    foglalkozas: 'portás'
};
//call
odon.udvozles.call(bela, 'hivatalos', 'Estét');
//apply: elsőt kívűl mindent tömbként vár
odon.udvozles.apply(bela, ['baráti', 'ReggelTTT']);

//bind nem meghívja hanem eltárolja és betárazható pl egy változóba
var odonBarati = odon.udvozles.bind(odon, 'baráti', 'napot!!!');
odonBarati();
*/
//#endregion

//#region Closure
/*
//Clouser összefoglaló: egy belső függvény mindig képes hozzáférni az őt tartalmazó külső függvény paramétereihez és változóihoz még azután is, hogy a külső függvény befejezte a futását
function nyugdij(ev) {
    var szoveg = 'Nyugdíjazásig hátralévő évek száma: '
    return function(szuletesiEv) {
        var datumObjektum = new Date();
        var aktualisEv = datumObjektum.getFullYear();
        var kor = aktualisEv - szuletesiEv;
        console.log(szoveg + (ev - kor));
    }
}

var nyugdijazasUSA = nyugdij(66);
nyugdijazasUSA(1992)
nyugdij(65)(1992)

///////////////////////////////////////////
var szamlalo = 0;

var leptet = (
    function() {
        var szamlalo = 0;
        return function() {
            szamlalo++;
            console.log(szamlalo)
        }
    }
)();

leptet();
leptet();
leptet();
*/
//#endregion

//#region Azonnal meghívódó függvények
//Normál:
/*
function jatek(){
    var pont = Math.random() * 10;
    console.log (pont >= 5);
}
jatek();
*/
/*
//Azonnali:
(function(teszt) {
    var pont = Math.random() * 10;
    console.log (pont >= 5);
    console.log (teszt);
})('Teszt Hello');

/*
//#endregion

//#region Visszadott függvények
/*
function interjuKerdes(foglalkozas) {
    if (foglalkozas === 'tanár') {
        return function(nev) {
            console.log(nev + ' meg tudná mondani milyen tárgyakat oktat?')
        }
    } else if (foglalkozas === 'eladó') {
        return function(nev) {
            console.log(nev + ' hogyan kezelne egy vevői reklamációt?')
        }
    } else {
        return function(nev) {
            console.log(nev + ' mi a foglalkozása?')
        }
    }
}

//kerdesTanaroknak amit vissza ad a first class az if ág után, a return paranccsal
var kerdesTanaroknak = interjuKerdes('tanár');
//Amit visszaadott, meghívjuk. kerdesTanaroknak = névtelen return function(nev)...
kerdesTanaroknak('Pál')

var kerdesEladoknak = interjuKerdes('eladó');
kerdesEladoknak('Béla');
kerdesEladoknak('Géza');
kerdesEladoknak('Bence');
//Egyben meghívva
interjuKerdes('tanár')('Péter');
*/
//#endregion

//#region Függvények, First-class és Callback
/*
Függvény az Object típusnak egy példánya
Úgy viselkedik mint bármilyen másik obj
Egyetlen változóban tárolhatunk egyetlen függvényt
Egy függvényt átadhatunk egy másik fv-nek mint paraméter
Egy függvény visszatérési értéke lehet egy függvény is
*/

/*
var evek = [1954, 1991, 1993, 2000, 2001, 2002, 2003, 2005];

function tombMuvelet(tomb, fv) {
    var eredmeny = [];

    for (var i=0; i < tomb.length; i++) {
        eredmeny.push(fv(tomb[i]));
    }
    return eredmeny;
}

function korSzamitas(elem) {
    return 2022 - elem;
}

function felnott(elem) {
    return elem >= 18;
}

var korok = tombMuvelet(evek, korSzamitas);
console.log(korok);

var felnottek = tombMuvelet(korok, felnott);
console.log(felnottek);

*/
//#endregion

//#region Egyszerű típusok és objektumok
/*
var x = 10;
var y = x;
x = 100;
console.log( x, y)

//Itt felveszi az értéket és kész
var o1 = {
    sz: 100,
    m: 200
};

//Itt rámutat az objektumra
var o2 = o1;
o1.sz = 150;
console.log(o1.sz)
console.log(o2.sz)

var a = 10;
var o = {
    nev: 'Odon',
    kor: 12
};
function modosit(a, b){
    a = 40;
    b.nev = 'Lajos'
}
modosit(a, o);
console.log(a, o.nev)
*/
//#endregion

//#region Objektum create
/*
var szemelyProto = {
    korSzamitas: function(){
        console.log(2022- this.szuletesiEv)
    }
};
//"A" verzió (közvetlen örököl)
var odon = Object.create(szemelyProto);
odon.nev = 'Ödön';
odon.szuletesiEv = 1969;
odon.foglalkozas = 'Pék'

//"B" verzió
var kati = Object.create(szemelyProto, {
    nev: {value: 'Kati'},
    szuletesiEv: {value: 1945},
    foglalkozas: {value: 'Kozmetikus'}
});
*/
//#endregion

//#region Objektumok és prototípus lánc
/*
var Szemely = function(nev, szuletesiEv, foglalkozas) {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
}

Szemely.prototype.korSzamitas = function(){
    console.log(2022-this.szuletesiEv)
}
var odon = new Szemely('Ödön', 1976, 'Grafikus');
odon.korSzamitas();

console.log(odon)
*/
//#endregion

//#region DOM Manipuláció
//DOM a teljes HTML oldal
//HTML dokumentum minden eleme objektum




//#endregion

//#region Ciklusok
/*
//While
var tomb = ['AGSWFDD', 23, 12, true, 44, 1222];
i = 0;
while(i < tomb.length) {
    
    console.log(tomb[i]);
    i++
}
*/
/*
var tomb = ['AGSWFDD', 23, 12, true, 44, 1222, 'strin g'];

//FOR + Break
for (var i = 0; i < tomb.length; i++){
    if (typeof(tomb[i]) === 'boolean') {
        break;
    }
    console.log(tomb[i]);
}

//FOR + CONTINUE
for (var i = 0; i < tomb.length; i++){
    if (typeof(tomb[i]) !== 'string') {
        continue;
    }
    console.log(tomb[i]);
}
*/
//#endregion

//#region Objektum metódusok
/*
var huba = {
    nev: 'Huba',
    kor: 37,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond'],
    szuletesiEvSzamitas: function(){
        this.szuletesiEv = 2022 - this.kor; 
    }
};

huba.szuletesiEvSzamitas();
console.log(huba);
*/
//#endregion

//#region Objektumok, tulajdonságok
/*
//Objektum literál
var huba = {
    nev: 'Huba',
    kor: 34,
    foglalkozas: 'vezér',
    hazas: true,
    baratok: ['Álmos', 'Előd', 'Ond'],
};
console.log(huba.foglalkozas);
console.log(huba['nev']);

var h = 'hazas';
console.log(huba[h]);

//Objektum
var tas = new Object();
tas.nev = 'Tas';
tas.kor = 32;
tas['foglalkozas'] = 'vezér';

console.log(tas)
*/
//#endregion

//#region Tömbök, Arrays
/*
var nev1 = 'Ond';
var nev2 = 'Kond';
var nev3 = 'Tas';

var nevek = [nev1, nev2, nev3]; //Javasolt megoldás
var korok = new Array(23,53,56);

console.log(nevek[0]);
console.log(nevek);
console.log(nevek.length);

nevek[1] = 'Huba';
console.log(nevek);

nevek[nevek.length] = 'Károly';
console.log(nevek);

var huba = ['huba', 34, 'vezér', true];

//Hozzáadás
huba.push(42); //végére ad értéket
huba.unshift('ifj') //Tömb elejére adja az értéket
console.log(huba);

//Törölni
huba.pop(); //utolsó elem a tömbből kitörli
huba.shift(); // legelső 

//Keresés
console.log(huba.indexOf(34)); //ha nem talál: -1

var szakacs = huba.indexOf('szakacs') === -1 ? 'Huba nem szakacs' : 'Huba szakacs' //Ternális
console.log(szakacs)
*/
//#endregion

//#region Függvények II
/*
var eletsSzakaszok = function(nev, kor){
    switch(true){
        case kor < 13:
            return nev + ' gyerek';
            break;
        case kor >= 13 && kor <= 21:
            return nev + ' tini';
            break;
        default:
            return nev + ' felnőtt';
    }
}

console.log(eletsSzakaszok('Kati', 14));
*/
//#endregion

//#region Függvények
/*
function hello(nev){
    //alert('Hello ' + nev);
    return('Hello ' + nev);
}
console.log(hello('Gizi'));

function teglalapKeruletTerulet(a,b,funckio){
    var eredmeny;
    if (funckio ==='kerulet') {
        eredmeny = (a + b)*2;
    } else if (funckio === 'terulet'){
        eredmeny = a * b;
    } else {
        return 'Hibás';
    }

    return funckio + ' = ' + eredmeny;
}

console.log(teglalapKeruletTerulet(5,4,'kerulet'));
console.log(teglalapKeruletTerulet(5,4,'terulet'));
console.log(teglalapKeruletTerulet(5,4,'aassd'));
*/
//#endregion

//#region egyenlőség == és totális egyenlőség ===
/*
var szam;
szam = 0;
if (szam || szam === 0){
    console.log('Létezik')
}else{
    console.log('Nem')
}

// == nem szigorú egyezőség (10='10') és === totális egyezőség
var x = 10;
if(x == '10'){
    console.log('Igen')
} else {
    console.log('Nem')
}
*/
//#endregion

//#region MŰVELETEK SORRENDJE
/*
var kigyok = 100;
var bekak = 21
var madarak = 39;

var tobbAHullo = kigyok + bekak > madarak;
console.log(tobbAHullo);
*/
//#endregion

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

