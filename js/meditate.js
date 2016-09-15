var setupClock = $('.setupClock').FlipClock(10, {
    countdown: true,
    minimumDigits: 2,
    autoStart: false,
    clockFace: 'Counter'
});
var music, isPlaying;


function playTimer() {
    if(isPlaying) { //stop

    } else { //start
        music = new Howl({
            src: ['audio/stardust.ogg','audio/stardust.mp3'],
            autoplay: true,
            loop: true
        });
        isPlaying = true;
    }
}


// function onLoad() {
// }


// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

