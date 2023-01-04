var SpeachRecognition=window.webkitSpeechRecognition;
var recognition=new SpeachRecognition();
content=""
Webcam.set({
    width:360,
    height:250,
    img_format:"png",
    png_quality:90
});
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
Webcam.attach(camera);
Webcam.attach(camera2);
Webcam.attach(camera3);
}
if(content=="take my selfie"){
    console.log("takeing selfie------");
    speak();
}
function take_snapshot(){
console.log(img_id)
Webcam.snap(function(data_uri){
    if (img_id=="result"){
        document.getElementById("result").innerHTML='<img id="selfie"src="'+data_uri+'"/>';
    }
    if (img_id=="result2"){
        document.getElementById("result2").innerHTML='<img id="selfie"src="'+data_uri+'"/>';
    }
    if (img_id=="result3"){
        document.getElementById("result3").innerHTML='<img id="selfie"src="'+data_uri+'"/>';
    }
}
)};
function speak(){
    var synth=window.speechSynthesis;
   speak_data=document.getElementById("textbox").value;
   speak_data="takeing your selfie in 5 seconds";
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
   Webcam.attach(camera);
   Webcam.attach(camera2);
   Webcam.attach(camera3);
}
setTimeout(function(){
    img_id="selfie";
    take_snapshot();
    speak_data="takeing your selfie in 10 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},50);

setTimeout(function(){
    img_id="selfie2";
    take_snapshot();
    speak_data="takeing your selfie in 10 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},50);


setTimeout(function(){
    img_id="selfie3";
    take_snapshot();
    speak_data="takeing your selfie in 10 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},50);
var camera=document.getElementById("camera");
var camera2=document.getElementById("camera2");
var camera3=document.getElementById("camera3");