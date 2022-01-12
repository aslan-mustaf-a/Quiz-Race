var login_object
var playerObject
var questions_object
var bg_image

function preload(){
bg_image = loadImage("bg.webp")
}

function setup(){  
login_object = new Login()
canvas = createCanvas(displayWidth, displayHeight)
playerObject = new Player()
questions_object = new Questions()
}

function draw(){
 login_object.display()
 background(bg_image)
 playerObject.displayScore()
}