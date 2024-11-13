let next = document.getElementById("next");
let sec0 = document.getElementById("tab-0");
let sec1 = document.getElementById("tab-1");
let sec2 = document.getElementById("tab-2");
let sec3 = document.getElementById("tab-3");
let sec4 = document.getElementById("tab-4");
var gare = document.getElementsByClassName("gare");
var gare2 = document.getElementsByClassName("gare2");
let depart = document.getElementById("depart");
let arret = document.getElementById("arret");
let voyageurscounter = document.getElementById("voyageurscounter");
let voyageurscounterEnfant = document.getElementById("voyageurscounterEnfant");
let prixTotal = document.getElementById("prixTotal");
var voyageurPlMo = document.getElementById("voyageurPlMo");
var checkbox = document.querySelectorAll(".checkbox");
let prixCard = document.getElementById("prixCard");
let dateCard = document.getElementById("dateCard");
var cardContent = document.querySelector(".cardContent");
var date = document.getElementById("date");
var checkednbr;
var temp = 0;
var tableau = "";
var table = "";
var adultPrix = 0;
var enfantPrix = 0;
var totale;
var temp = 0;

var j;
var k;
var count = 0;
var c = 0;

var i = 0;
var tabList = [sec0, sec1, sec2, sec3, sec4];

function nextSection() {
  if (date.value === "" && i === 1) {
    alert("saisir une autre option");
    return;
  }
  if (
    (depart.value == depart[0].value || arret.value == arret[0].value) &&
    i === 1
  ) {
    alert("saisir une autre option");
    return;
  }
  if (depart.value === arret.value && i === 1) {
    alert("saisir une autre option");
    return;
  }

  if (temp < c + count && i == 3) {
    alert("saisir une autyytytre option");
    return;
  }

  i++;

  tabList[i].style.display = "flex";

  tabList[i].scrollIntoView({ behavior: "auto", display: "block" });

  if (i == 4) {
    PrixCardAdult();
    PrixCardEnfant();
  }

  if (i == 4) {
    next.style.display = "none";
  }
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
    checkednbr = document.querySelectorAll(".checkbox:checked");
    if (checkednbr.length > count + c) {
      this.checked = false;
      alert("dépassé la limite");
    }
    temp = checkednbr.length;
  };
}
function PrixCardAdult() {
  for (let z = 0; z < count; z++) {
    table += `
          
            <div class="test">
        <h4 class="ticket">Ticket</h4>
        <h4 class="busness">busness class</h4>

        <div class="passenger">
          <p>PASSENGER</p>
          <p class="des">Mr. Boukadia</p>
        </div>
        <div class="flight">
          <p>Prix</p>
          <p class="des">500DH</p>
        </div>
        <div class="date">
          <p>DATE</p>
          <p class="des">${date.value}</p>
        </div>

        <div class="departe">
          <p>DEPART</p>
          <p class="des"><span> ${depart.value}</span></p>
        </div>
        <div class="arrete">
          <p>ARRET</p>
          <p class="des"><span> ${arret.value}</span></p>
        </div>

        <div class="qrCode">
          <img src="./9185570.png" alt="" />
        </div>
        <div class="bg"></div>
        <div class="bgr"></div>
      </div>
           `;
  }
  cardContent.innerHTML = table;
}

function PrixCardEnfant() {
  for (let k = 0; k < c; k++) {
    tableau += `
          
          <div class="test">
        <h4 class="ticket">Ticket</h4>
        <h4 class="busness">busness class</h4>

        <div class="passenger">
          <p>PASSENGER</p>
          <p class="des">Mr. Boukadia</p>
        </div>
        <div class="flight">
          <p>Prix</p>
          <p class="des">100DH</p>
        </div>
        <div class="date">
          <p>DATE</p>
          <p class="des">${date.value}</p>
        </div>

        <div class="departe">
          <p>DEPART</p>
          <p class="des"><span> ${depart.value}</span></p>
        </div>
        <div class="arrete">
          <p>ARRET</p>
          <p class="des"><span> ${arret.value}</span></p>
        </div>

        <div class="qrCode">
          <img src="./9185570.png" alt="" />
        </div>
        <div class="bg"></div>
        <div class="bgr"></div>
      </div>
           
           `;
  }
  cardContent.innerHTML += tableau;
}
