function playVideo(element) {
  element.play();
}

function pauseVideo(element) {
  element.pause();
}

var vid = document.getElementById("video");
vid.muted = true;