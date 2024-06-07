const button = document.querySelector("#waitlistbutton");
const popup = document.querySelector("#waitlistpopup");
const cancel = document.querySelector("#cancelwaitlist");
const submit = document.querySelector("#submitwaitlist");
let waitName = "";
let waitTel = "";


let days = 30

button.addEventListener("click", addMeToTheWaitlist());
cancel.addEventListener("click", closeTheWaitList());
submit.addEventListener("click", submitTheWaitList());


function addMeToTheWaitlist() {

    popup.classList.remove("fade-out");
    popup.classList.add("fade-in"); 
    
}
    
function closeTheWaitList() {
    popup.classList.remove("fade-in");
    popup.classList.add("fade-out");
}

function submitTheWaitList() {
    waitName = document.getElementById("name").innerText;
    waitTel = document.getElementById("tel").innerText;
    if (waitName != "" & waitTel != "") {

    document.getElementById("waitlist").innerHTML = document.getElementById("waitlist").innerHTML + 
    "<p>" + waitName + "<span>" + days + "d</span></p>"
    days += Math.floor(Math.random() * 9);
    closeTheWaitList();
    console.log("submitted " + document.getElementById("name").innerText);
    }
}
//add a check to make sure the user has filled in the boxes and tyhen take the name and shove it into the waitlist function