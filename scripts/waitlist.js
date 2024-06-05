const button = document.querySelector("#waitlistbutton");
const popup = document.querySelector("#waitlistpopup");

let days = 30

button.addEventListener("click", addMeToTheWaitlist);

function addMeToTheWaitlist() {
    
popup.classList.remove("fade-out");
    popup.classList.add("fade-in");

    document.getElementById("waitlist").innerHTML = document.getElementById("waitlist").innerHTML + 
    "<p>Name<span>" + days + "d</span></p>"
    days += Math.floor(Math.random() * 9)
}
    
    
//    popup.classList.remove("fade-in");
 //   popup.classList.add("fade-out");