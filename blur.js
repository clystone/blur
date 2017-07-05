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
var radius = 50;
var clippingRegion = {x:-1,y:-1,r:radius};
image.src = "image.jpg";
image.onload = function () {
    initCanvas()
};

function initCanvas(){
    clippingRegion = {
        x:Math.random()*(canvasWidth-2*radius)+radius,
        y:Math.random()*(canvasHeight-2*radius)+radius,
        r:radius
    };
    draw(image,clippingRegion)
}

function setClippingRegion(clippingRegion){
    context.beginPath();
    context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false);
    context.clip();
}

function draw(image,clippingRegion){
    context.clearRect(0,0,canvas.width,canvas.height);

    context.save();
    setClippingRegion(clippingRegion);
    context.drawImage(image,0,0);
    context.restore();
}

function show(){
    var timer = setInterval(
        function () {
            console.log(111);
            clippingRegion.r += 20;
            draw(image,clippingRegion);
            if (clippingRegion.r > Math.sqrt(canvasHeight * canvasHeight + canvasWidth*canvasWidth)){
                clearInterval(timer)
            }
        },
        30
    )
}

function reset(){
    initCanvas()
}
