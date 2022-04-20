function setup(){
 canvas = createCanvas(640, 400);
 canvas.center();
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("rgb(245, 245, 153");
    text("Dog", 45, 75);
    noFill();
    stroke("rgb(245, 245, 153");
    rect(30, 60, 450, 350);

    fill("rgb(245, 245, 153");
    text("Cat", 320, 120);
    noFill();
    stroke("rgb(245, 245, 153");
    rect(300, 90 ,270, 320);
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}