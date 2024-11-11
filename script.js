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
var voyageurPlMo = document.getElementById("voyageurPlMo");
var checkbox = document.querySelectorAll(".checkbox");

var adultPrix = 0;
var enfantPrix = 0;
var totale;
var j;
var k;
var count = 0;
var c = 0;

var i = 0;
var tabList = [sec0, sec1, sec2, sec3, sec4];

function nextSection() {
  i++;
  // if (i > 4) {
  //   i = 0;

  // }

  tabList[i].style.display = "flex";

  tabList[i].scrollIntoView({ behavior: "auto", display: "block" });
}

function gareDepart(event) {
  for (j = 0; j < 4; j++)
    gare[j].textContent = event.options[event.selectedIndex].textContent;
}
function gareArriver(event) {
  for (j = 0; j < 4; j++)
    gare2[j].textContent = event.options[event.selectedIndex].text;
}

function voyageurNumberPlus() {
  count++;
  voyageurscounter.innerText = count;
  adultPrix += 500;
  total();
}

function voyageurNumberMoin() {
  if (count >= 0) count--;

  voyageurscounter.innerText = count;
  if (adultPrix >= 500) adultPrix -= 500;
  total();
}

function voyageurEnfantNumberPlus() {
  c++;

  voyageurscounterEnfant.innerText = c;
  enfantPrix += 100;
  total();
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

for (let i = 0; i < 8; i++) {
  checkbox[i].onclick = function () {
    var checkednbr = document.querySelectorAll(".checkbox:checked");
    if (checkednbr.length > count + c) {
      this.checked = false;
      alert("depasser la limite");
    }
  };
}
