
// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn ="player1"
//  Brownos
function topLeft() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "52")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "25")
  rect.setAttribute("y", "25")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}


function topMid() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "152")
  circle.setAttribute("cy", "52")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "120")
  rect.setAttribute("y", "25")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}


function topRight() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "52")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "222")
  rect.setAttribute("y", "25")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}
//  Middle Brownos
function midLeft() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "25")
  rect.setAttribute("y", "125")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}


function midMid() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "152")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "120")
  rect.setAttribute("y", "125")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}


function midRight() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "152")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "223")
  rect.setAttribute("y", "125")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}
//  Bottom Brownos
function botLeft() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "25")
  rect.setAttribute("y", "225")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}


function botMid() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "152")
  circle.setAttribute("cy", "252")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "122")
  rect.setAttribute("y", "226")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}


function botRight() {
  var gameboard = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  var rect = document.createElementNS(namespace, "rect")
  if(turn=="player1") {
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "35")
  circle.setAttribute("fill", "black")
  gameboard.appendChild(circle)
  turn="player2"
  } else {
  rect.setAttribute("x", "220")
  rect.setAttribute("y", "225")
  rect.setAttribute("width", "55")
  rect.setAttribute("height", "55")
  rect.setAttribute("fill", "red")
  gameboard.appendChild(rect)
  turn="player1"
  }
}
