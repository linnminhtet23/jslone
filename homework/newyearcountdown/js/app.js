const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const year = document.getElementById("years");

const countdown = document.getElementById("countdown");

const currentyear = new Date().getFullYear();

const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
const ny =currentyear+1;
year.innerHTML=`${ny.toString().substring(0,2)}<i>${ny.toString().substring(2,4)}</i>`;

function updatecountdown() {
    const currentime = new Date();
  
  
    const diff = newyeartime - currentime;
                      //  ms      s     m    h    d
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
  
    days.textContent = d;
    hours.textContent = h < 10 ? "0" + h : h;
    minutes.textContent = m < 10 ? "0" + m : m;
    seconds.textContent = s < 10 ? "0" + s : s;
  }
  setInterval(updatecountdown, 1000);
