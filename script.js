let next = document.getElementById("next");
let sec0 = document.getElementById("sec0");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
let sec3 = document.getElementById("sec3");
let sec4 = document.getElementById("sec4");
var i = 0;
// console.log(typeof 'sec0')
var secList = [];
const list = {
  sec0: sec0,
  sec1: sec1,
  sec2: sec2,
  sec3: sec3,
  sec4: sec4,
};
secList.push(list);
console.log(secList);
// const array=["sec0","sec1","sec2","sec3","sec4"]

console.log(next);
next.onclick = function (i) {
  sec1.style.display = "flex";

  secList[1].scrollIntoView({ behavior: "smooth", display: "block" });
};
