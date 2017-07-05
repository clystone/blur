/**
 * Created by stone on 2017/7/5.
 */
var canvasWidth = 788;
var canvasHeight = 800;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image =  new Image();
var clippingRegion = {x:400,y:200,r:50};
image.src = "image.jpg";
image.onload = function () {
    initCanvas()
};

function initCanvas(){
    draw(image)
}

function setClippingRegion(clippingRegion){
    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
    context.clip();
}

function draw(image){
    context.clearRect(0,0,canvas.width,canvas.height);

    context.save();
    setClippingRegion(clippingRegion);
    context.drawImage(image,0,0);
    context.restore();
}
