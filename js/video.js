var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.getElementById("play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").textContent = (video.volume * 100) + "%";
});

document.getElementById("pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
    if(video.currentTime + 10 > video.duration){
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current location is " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
    if(video.muted){
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
});

document.getElementById("slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.getElementById("volume").textContent = this.value + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

