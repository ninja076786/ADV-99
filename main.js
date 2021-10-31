var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function selfie(){
document.getElementById("textbox").innerHTML="";
Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
        console.log("Taking Selfie...")
    }
}
function speak(){
var synth=window.speechSynthesis;
speak_data="Confirmed. I Will Be Taking Your Selfie In 5 Seconds.";
var you_better_utter_this=new SpeechSynthesisUtterance(speak_data);
synth.speak(you_better_utter_this);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();
save();
},5000);
}

camera=document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 120
  });
  function take_snapshot(){
 Webcam.snap(function(dataurl){
document.getElementById("result").innerHTML="<img id='selfie_image' src='"+dataurl+"'>";
 });
  }
  function save(){
    var link=document.getElementById("link");
    var image=document.getElementById("selfie_image").src;
     link.href=image;
     link.click();
  }