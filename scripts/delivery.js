

//plan to have timer reset ~ an hour after countdown is done




var countDownDate = new Date().getTime() + 234578;

var x = setInterval(function() {


  var now = new Date().getTime();


  var distance = countDownDate - now;

  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }
 
  document.getElementById("hottime").innerHTML = hours + ":"
  + minutes + ":" + seconds;

 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hottime").innerHTML = "SOLD";
    document.getElementById("hottime").style.color = "red";
    document.getElementById("hotbidlist").style.backgroundColor = "gray";
  }
}, 1000);
