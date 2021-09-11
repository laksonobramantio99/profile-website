var i = 0;
var txt = 'ello! ';
var speed = 400;

function typeWriter() {
    if (i < txt.length) {
        syncDelay(speed);
        document.getElementById("hello").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 10);
        if (i == txt.length) {
            syncDelay(5000);
            document.getElementById("hello").innerHTML = "H";
            i = 0;
        }
    }
}

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
 }, false);
