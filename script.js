let next = document.getElementById("next");
let sec0 = document.getElementById("tab-0");
let sec1 = document.getElementById("tab-1");
let sec2 = document.getElementById("tab-2");
let sec3 = document.getElementById("tab-3");
let sec4 = document.getElementById("tab-4");
var i = 0;
var tabList = [sec0, sec1, sec2, sec3, sec4];

function nextSection() {
  i++;
  if (i > 4) i = 0;

  tabList[i].style.display = "flex";

  tabList[i].scrollIntoView({ behavior: "smooth", display: "block" });
}
