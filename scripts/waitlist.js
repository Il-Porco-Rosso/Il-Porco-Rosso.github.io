const button = document.querySelector("input");

let days = 30

button.addEventListener("click", addMeToTheWaitlist);

function addMeToTheWaitlist() {
    document.getElementById("waitlist").innerHTML = document.getElementById("waitlist").innerHTML + 
    "<p>Name<span>" + days + "d</span></p>"
    days += Math.floor(Math.random() * 9)}