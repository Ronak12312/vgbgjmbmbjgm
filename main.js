function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(550,80);
    posy=ml5.poseNet(video,modalLoaded);
    posy.on("pose",gotposes);
}
function draw(){
    background("grey");
}
function modalLoaded(){
    console.log("vdbckjbnbdxzsxdgfhgjhkjhgfcddz");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}