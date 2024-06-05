const button = document.querySelector("#waitlistbutton");
const popup = document.querySelector("#waitlistpopup");
const cancel = document.querySelector("#cancelwaitlist");
const submit = document.querySelector("#submitwaitlist");

let days = 30

button.addEventListener("click", addMeToTheWaitlist);
cancel.addEventListener("click", closeTheWaitList);
submit.addEventListener("click", submitTheWaitList);

function addMeToTheWaitlist() {
    popup.classList.remove("fade-out");
    popup.classList.add("fade-in");  
}
    
function closeTheWaitList() {
    popup.classList.remove("fade-in");
    popup.classList.add("fade-out");
}

function submitTheWaitList() {
    document.getElementById("waitlist").innerHTML = document.getElementById("waitlist").innerHTML + 
    "<p>Name<span>" + days + "d</span></p>"
    days += Math.floor(Math.random() * 9);
    closeTheWaitList();
}