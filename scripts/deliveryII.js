
let secondaryCoundDownDate = new Date().getTime() + Math.floor((Math.random() * 3000000) ^ (Math.random() * 300));
let xi = setInterval(function() {


  let nowII = new Date().getTime();


  let secondaryDistance = secondaryCoundDownDate - nowII;
  

  let hoursII = Math.floor((secondaryDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesII = Math.floor((secondaryDistance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsII = Math.floor((secondaryDistance % (1000 * 60)) / 1000);


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

//----------------
 
    document.getElementById("IIndtime").innerHTML = hoursII + ":"
    + minutesII + ":" + secondsII;

 

  if (secondaryDistance < 0) {
    clearInterval(xi);
    document.getElementById("IIndtime").innerHTML = "SOLD";
    document.getElementById("IIndtime").style.color = "red";
    document.getElementById("IIndbidlist").style.backgroundColor = "gray";
  }
}, 1000);



