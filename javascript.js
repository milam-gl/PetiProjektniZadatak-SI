document.querySelector(".clock .hours").innerHTML = (
    new Array(24).fill(0).map((n, i) => {
        return `
        <div>
            ${i < 10 ? "0" + i : i}
        </div>
        `;
    }).join("")
);

document.querySelector(".clock .minutes").innerHTML = (
    new Array(60).fill(0).map((n, i) => {
        return `
        <div>
            ${i < 10 ? "0" + i : i}
        </div>
        `;
    }).join("")
);

document.querySelector(".clock .seconds").innerHTML = (
    new Array(60).fill(0).map((n, i) => {
        return `
        <div>
            ${i < 10 ? "0" + i : i}
        </div>
        `;
    }).join("")
);

let time = new Date();
let prevHours = time.getHours() * 100,
    prevMinutes = time.getMinutes() * 100,
    prevSeconds = time.getSeconds() * 100;

document.querySelector(".clock .hours div").style.marginTop =
`-${prevHours}px`;
document.querySelector(".clock .minutes div").style.marginTop =
`-${prevMinutes}px`;
document.querySelector(".clock .seconds div").style.marginTop =
`-${prevSeconds}px`;

function updateClock() {
    let time = new Date();
    let hours = time.getHours() * 100,
        minutes = time.getMinutes() * 100,
        seconds = time.getSeconds() * 100;

        if (prevHours !== hours) {
            prevHours = hours;
            document.querySelector(".clock .hours div").style.marginTop = `-${hours}px`;
            document.querySelector(".clock .hours").classList.add("animate");
            setTimeout(function(){
                document.querySelector(".clock .hours").classList.remove("animate");
            },800);
          }

    if (prevMinutes !== minutes) {
        prevMinutes = minutes;
        document.querySelector(".clock .minutes div").style.marginTop = `-${minutes}px`;
        document.querySelector(".clock .minutes").classList.add("animate");
        setTimeout(function(){
            document.querySelector(".clock .minutes").classList.remove("animate");
        },800);
      }

    if (prevSeconds !== seconds) {
        prevSeconds = seconds;
        document.querySelector(".clock .seconds div").style.marginTop = `-${seconds}px`;
        document.querySelector(".clock .seconds").classList.add("animate");
        setTimeout(function(){
            document.querySelector(".clock .seconds").classList.remove("animate");
        },800);
      }
}

setInterval(updateClock, 1000);






function CustomAlert(){
    this.alert = function(message,title){
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
  
      let winH = window.innerHeight;
      dialogoverlay.style.height = winH+"px";
  
      dialogbox.style.top = "100px";
  
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
  
      document.getElementById('dialogboxhead').style.display = 'block';
  
      if(typeof title === 'undefined') {
        document.getElementById('dialogboxhead').style.display = 'none';
      } else {
        document.getElementById('dialogboxhead').innerHTML =title + ' ' + '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ';
      }
      document.getElementById('dialogboxbody').innerHTML = message;
      document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>';
    }
  
    this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
    }
  }
  
  let customAlert = new CustomAlert();