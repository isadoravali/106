var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);

if(Content == "tire minha selfie"){
    console.log("tirando a selfie");
    speak();
}

document.getElementById("textbox").innerHTML = Content;
}

function speak(){
    var synth = window.SpeechSynthesis;

    speak_data = "tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    setTimeout();
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
    }, 5000);




}

Webcam.set({
    width:360,
    height:250,
    Image_format : 'png',
    png_quality:90,
});
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    })

}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").scroll;
    link.href = image;
    link.click();

}




