function meow() {
    var num = Math.floor(Math.random() * 4) + 1; // min 1 max 3
    var audio = new Audio(`meow${num}.wav`);
    audio.play();
}