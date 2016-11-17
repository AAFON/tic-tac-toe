
// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function TOPLEFT() {
   var shape = document.createElementNS(namespace, "circle")
   var canvas = document.getElementById("game-board")
   shape.setAttribute("r", 35)
   shape.setAttribute("cx", 45)
   shape.setAttribute("cy", 45)
   shape.setAttribute("fill", "red")
  canvas.appendChild(shape)
}
TOPLEFT()
function TOPMID() {
  var shape = document.createElementNS(namespace, "rect")
  var canvas = document.getElementById("game-board")
  shape.setAttribute("width", 70)
  shape.setAttribute("height", 70)
  shape.setAttribute("x", 100)
  shape.setAttribute("y", 10)
  shape.setAttribute("fill", "red")
 canvas.appendChild(shape)
}
TOPMID()
