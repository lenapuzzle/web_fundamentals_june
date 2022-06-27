// updating the button message
function uploadPup(element) {
  console.log("Hi", element);
  element.innerText = "Uploaded! Thank you"
}

// removing the whole element
function removeElement(element) {
  console.log("removing smth", element)
  element.remove();
}

// hover over video - it starts playing
function playVideo(element) {
  console.log("hey");
  element.play();
}

// pause video
function pauseVideo(element) {
  element.pause();
}

function changeImg(element) {
  console.log("hi", element);
  element.src = "./resources/anothaPuppy.jpeg";
}

function cookieMonster(element) {
  console.log("Hey");
  document.querySelector("#cookie-box");
  element.remove();
}