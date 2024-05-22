

//plan to have timer reset ~ an hour after countdown is done




var countDownDate = new Date().getTime() + 12345;

var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < 10){
    days = "0" + days;
  }
  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }
 
  document.getElementById("hottime").innerHTML = days + "d " + hours + ":"
  + minutes + ":" + seconds;

 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hottime").innerHTML = "SOLD";
  }
}, 1000);
