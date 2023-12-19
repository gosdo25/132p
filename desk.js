status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:detecting objects";
}
function modelloaded(){
    console.log("modelloaded");
    status=true;
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
}
function preload(){
    img=loadImage("https://th.bing.com/th/id/OIP.lV7f93gNCDK0s-glfKZuXQHaHa?w=210&h=210&c=7&r=0&o=5&pid=1.7");
}
function draw(){
    image(img,0,0,640,420);
    

}