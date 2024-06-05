


let countDownDate = new Date().getTime() + Math.floor(Math.random() * 200000);
let secondaryCoundDownDate = new Date().getTime() + Math.floor((Math.random() * 3000000) ^ (Math.random() * 300));
let x = setInterval(function() {


  let now = new Date().getTime();


  let distance = countDownDate - now;
  let secondaryDistance = secondaryCoundDownDate - now;
  
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//-------------
  let hoursII = Math.floor((secondaryDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesII = Math.floor((secondaryDistance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsII = Math.floor((secondaryDistance % (1000 * 60)) / 1000);


  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }
//--------------
  if (hoursII < 10){
    hoursII = "0" + hoursII;
  }
  if (minutesII < 10){
    minutesII = "0" + minutesII;
  }
  if (secondsII < 10){
    secondsII = "0" + secondsII;
  }

  document.getElementById("hottime").innerHTML = hours + ":"
  + minutes + ":" + seconds;
//----------------
  if (document.getElementById("IIndtime")){
    document.getElementById("IIndtime").innerHTML = hoursII + ":"
    + minutesII + ":" + secondsII;
  
  }
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hottime").innerHTML = "SOLD";
    document.getElementById("hottime").style.color = "red";
    document.getElementById("hotbidlist").style.backgroundColor = "gray";
  }

  if (secondaryDistance < 0) {
    clearInterval(x);
    document.getElementById("IIndtime").innerHTML = "SOLD";
    document.getElementById("IIndtime").style.color = "red";
    document.getElementById("IIndbidlist").style.backgroundColor = "gray";
  }
}, 1000);



