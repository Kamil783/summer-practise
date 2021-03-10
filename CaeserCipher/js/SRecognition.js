function record() {
    var Rec = new webkitSpeechRecognition();
    Rec.lang = "ru";

    Rec.onresult = function(event) {
        document.getElementById('speech').value = event.results[0][0].transcript;
    }
    Rec.start();
}