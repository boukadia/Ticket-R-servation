let next = document.getElementById("next");
let sec0 = document.getElementById("tab-0");
let sec1 = document.getElementById("tab-1");
let sec2 = document.getElementById("tab-2");
let sec3 = document.getElementById("tab-3");
let sec4 = document.getElementById("tab-4");
var gare=document.getElementsByClassName("gare");
var gare2=document.getElementsByClassName("gare2");
let depart=document.getElementById("depart")
// let opt1=document.getElementById("opt1")
// let opt2=document.getElementById("opt2")
console.log()
var j;
var k;

var i = 0;
var tabList = [sec0, sec1, sec2, sec3, sec4];
// var optList=[opt1,opt2]

function nextSection() {
  i++;
  if (i > 4) {
    i = 0;
  }
    

  tabList[i].style.display = "flex";

  tabList[i].scrollIntoView({ behavior: "smooth", display: "block" });
}

function opt(event){
  for(j=0;j<4;j++)
  gare[j].textContent=event.options[event.selectedIndex].textContent;
    // gare[j].textContent=opt1.value
  console.log(gare)
}
function opt1(event){
  for(j=0;j<4;j++)
  gare2[j].textContent=event.options[event.selectedIndex].textContent;
}
// function opti(){
//   for(j=0;j<4;j++){
//     gare[j].textContent=opt2.value
//   }
//   k=1

// }
opt()



// gare=opt.value
// console.log(gare)
