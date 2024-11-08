let next = document.getElementById("next");
let sec0 = document.getElementById("tab-0");
let sec1 = document.getElementById("tab-1");
let sec2 = document.getElementById("tab-2");
let sec3 = document.getElementById("tab-3");
let sec4 = document.getElementById("tab-4");
var gare = document.getElementsByClassName("gare");
var gare2 = document.getElementsByClassName("gare2");
let depart = document.getElementById("depart");
let voyageurscounter = document.getElementById("voyageurscounter");
let voyageurscounterEnfant = document.getElementById("voyageurscounterEnfant");
let prixTotal = document.getElementById("prixTotal");
var adultPrix = 0;
var enfantPrix = 0;
var totale;
// let opt1=document.getElementById("opt1")
// let opt2=document.getElementById("opt2")
// console.log();
var j;
var k;
var count = 0;
var c = 0;

var i = 0;
var tabList = [sec0, sec1, sec2, sec3, sec4];
// var optList=[opt1,opt2]

function nextSection() {
  i++;
  // if (i > 4) {
  //   i = 0;

  // }

  tabList[i].style.display = "flex";

  tabList[i].scrollIntoView({ behavior: "auto", display: "block" });
}

function opt(event) {
  for (j = 0; j < 4; j++)
    gare[j].textContent = event.options[event.selectedIndex].textContent;
  // gare[j].textContent=opt1.value
  // console.log(typeof event);
}
function opt1(event) {
  for (j = 0; j < 4; j++)
    gare2[j].textContent = event.options[event.selectedIndex].text;
}
// function opti(){
//   for(j=0;j<4;j++){
//     gare[j].textContent=opt2.value
//   }
//   k=1

// }
opt();

// gare=opt.value
// console.log(gare)

function voyageurNumberPlus() {
  count++;
  voyageurscounter.innerText = count;

  // console.log(c);
  // alert("hello")
  adultPrix += 500;
  // prixTotal.innerText = adultPrix;
  total();
}

function voyageurNumberMoin() {
  if (count >= 0) count--;

  voyageurscounter.innerText = count;
  if (adultPrix >= 500) adultPrix -= 500;
  // prixTotal.innerText = adultPrix;
  total();
}

function voyageurEnfantNumberPlus() {
  c++;

  voyageurscounterEnfant.innerText = c;
  enfantPrix += 100;

  console.log(c);
  total();
  // alert("hello")
}
function voyageurEnfantNumberMoin() {
  if (c >= 0) c--;

  voyageurscounterEnfant.innerText = c;
  if (enfantPrix >= 100) enfantPrix -= 100;
  total();
}
function total() {
  totale = adultPrix + enfantPrix;
  prixTotal.innerText = totale;
}
