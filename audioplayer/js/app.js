//UI
const musiccontainer = document.getElementById("music-container");
const title = document.getElementById("title"),
  progresscontainer = document.getElementById("progress-container"),
  progress = document.getElementById("progress");

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");

const prevbtn = document.getElementById("prev"),
  playbtn = document.getElementById("play"),
  nextbtn = document.getElementById("next");

let songindex = 0;

//songtitle

const songs = ["sample1", "sample2", "sample3"];

// console.log(songs[songindex])
loadsong(songs[songindex]);

function loadsong(music) {
  // console.log(music);
  title.innerText = music;
  audio.src = `music/${music}.mp3`;
  cover.src = `img/${music}.jpg`;
}



function pausesong() {
  musiccontainer.classList.remove("play");
  playbtn.querySelector("i.fas").classList.add("fa-play");
  playbtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}



function playsong() {
  musiccontainer.classList.add("play");
  playbtn.querySelector("i.fas").classList.remove("fa-play");
  playbtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}


function updateProgress(e) {
  // console.log(audio.currentTime);
  // console.log(audio.duration)

  // Method1
  // const progresspercent = (audio.currentTime/audio.duration) *100
  // // console.log(progresspercent)
  // progress.style.width=`${progresspercent}%`


  // console.log(e.target);
  // console.log(this);
  // console.log(e.srcElement);

  // Method2
  // const currentTime = e.target.currentTime;
  // const duration = e.target.duration;
  // const progresspercent = (currentTime/duration) *100;
  // progress.style.width=`${progresspercent}%`

  // Method3
  // const {currentTime} = e.target;
  // const{duration} = e.target;
  // const progresspercent = (currentTime/duration) *100;
  // progress.style.width=`${progresspercent}%`;

  // Method4
  const{currentTime, duration} = e.target;
  const progresspercent = (currentTime/duration) *100;
  progress.style.width=`${progresspercent}%`;
}

function setProgress(e){
    // console.log('hay')

    const width = e.target.clientWidth;//width of the progress container
    // console.log(width);
    const clickx = e.offsetX; // to know where we click
    // console.log(clickx)

    const duration = audio.duration;//get the duration of audio
    // console.log(duration);

    audio.currentTime = (clickx/width) *duration;

    
}

function previoussong(){

  songindex--;

  if(songindex <0){
    songindex = songs.length-1
  }

  loadsong(songs[songindex]);
  playsong(songs[songindex]);
  
}

function nextsong(){
 songindex++;
 if(songindex > songs.length-1){
   songindex=0;
 }
loadsong(songs[songindex]);
 playsong(songs[songindex]);
 
}

  //event listener for play/pause
  playbtn.addEventListener("click", () => {
    // musiccontainer.classList.toggle('play')
    const isplaying = musiccontainer.classList.contains("play");

    if (isplaying) {
      pausesong();
    } else {
      playsong();
    }
  });

  prevbtn.addEventListener('click', previoussong);
  nextbtn.addEventListener('click', nextsong)

  //Time/song update
  audio.addEventListener("timeupdate", updateProgress);

progresscontainer.addEventListener('click', setProgress);

//song End
audio.addEventListener('ended', nextsong);

