/*
var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
   console.log("collision");
} else {
  console.log("les objets ne se touchent pas");
}

*/
function RectOne (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

var xPlayerInit = 10;
var yPlayerInit = 390;
var widthPlayerInit = 60;
var heightPlayerInit = 20;

var rectOne = new RectOne (xPlayerInit, yPlayerInit, widthPlayerInit, heightPlayerInit);
console.log(rectOne);

function RectTwo (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

var widthLeelouInit = 20;
var xLeelouInit =  xPlayerInit + (widthPlayerInit/2) - (widthLeelouInit/2);;
var yLeelouInit = 10;
var widthLeelouInit = 20;
var heightLeelouInit = 20;

var rectTwo = new RectTwo (xLeelouInit, yLeelouInit, widthLeelouInit, heightLeelouInit);
console.log(rectTwo);

if (rectOne.x < RectTwo.x + RectTwo.width &&
  rectOne.x + rectOne.width > RectTwo.x &&
  rectOne.y < RectTwo.y + RectTwo.height &&
  rectOne.height + rectOne.y > RectTwo.y) {
  console.log("collision");
} else {
 console.log("les objets ne se touchent pas");
}

function checkObstacles (a,b) {
 if (
  a.x + a.width > b.x &&
  a.y < b.y + b.height &&
  a.height + a.y > b.y
  ){
    console.log("collision");
  } else {
    console.log("les objets ne se touchent pas");
  }
};

var toto = {x:10, y:10, width:10, height:10};
var tata = {x:50, y:50, width:10, height:10};

console.log(checkObstacles(toto, tata));

console.log (checkObstacles (rectOne, rectTwo));

