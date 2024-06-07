


let countDownDate = new Date().getTime() + Math.floor(Math.random() * 200000);

let x = setInterval(function() {


  let now = new Date().getTime();


  let distance = countDownDate - now;
 
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//-------------


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


  document.getElementById("hottime").innerHTML = hours + ":"
  + minutes + ":" + seconds;
//----------------

 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hottime").innerHTML = "SOLD";
    document.getElementById("hottime").style.color = "red";
    document.getElementById("hotbidlist").style.backgroundColor = "gray";
  }


}, 1000);



