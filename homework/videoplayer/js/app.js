//UI
const video = document.getElementById("video");

const controls = document.querySelector(".controls");

const play = document.getElementById("play"),
  stop = document.getElementById("stop"),
  progress = document.getElementById("progress"),
  timestamp = document.getElementById("timestamp"),
  zoom = document.getElementById("zoom");

//Event
//Clicking Video
video.addEventListener("click", togglestatus);
video.addEventListener("pause", updateicon);
video.addEventListener("play", updateicon);
video.addEventListener("timeupdate", updateprogress);

//Clicking Button and input
play.addEventListener("click", togglestatus);
stop.addEventListener("click", stopvideo);
zoom.addEventListener("click", fullscreen);
progress.addEventListener("change", setvideoprogress);

//Play Pause by touching video
function togglestatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Change Icon State
function updateicon() {
  if (video.paused) {
    play.innerHTML = "<i class='bx bx-play bx-md'></i>";
  } else {
    play.innerHTML = "<i class='bx bx-pause bx-md'></i>";
  }
}

//Update Progress & timestamp
function updateprogress() {
  // console.log(video.currentTime);
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let mins = Math.floor(video.currentTime / 60);

  if (mins < 10) {
    mins = 0 + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + secs;
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}

//set the progress var the the
function setvideoprogress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

//Enter fullscreen mode
function fullscreen() {
  if (video.style.width === "60%") {
    video.style.width = "100%";
    video.style.height = "100%";
    controls.style.width = "100%";
    zoom.innerHTML = " <i class='bx bx-exit-fullscreen bx-md'></i>";
  } else {
    video.style.height = "60%";
    video.style.width = "60%";
    controls.style.width = "60%";
    // controls.style.height="20%";
    zoom.innerHTML = "<i class='bx bx-fullscreen bx-md'></i>";
  }
}

// Stop the video
function stopvideo() {
  video.currentTime = 0;
  video.pause();
}
