let bidAmount = 7000;
let decimal = 1;
let coin = 1;
let contender = "joe";
let namelist = [
    "Jane Doe", 
    "Aeigh Luvsekks", 
    "Jeff Beansauce", 
    "Howard E. Snuts", 
    "Nagisa Shiota", 
    "Morris Merrier", 
    "Porco Rosso", 
    "John Wemmick", 
    "Joe Shmoe", 
    "Barack Obama",
    "Redstone Ned",
    "Joe Stalin",
    "Mike Hawk",
    "VDV Disk",
    "Joe Bidome",
    "Ben Dover",
    "Gum Guan",
    "Guan Yu",
    "Zhuge Liang",
    "Dan TDM",
    "REDREY Disk",
    "El Donald",
    "Shaquille O Nile",
    "Jack from Statefarm",
    "Kingsley Shacklebolt",
    "Shrek",
    "Hairy Potter",
    "Gandalf the Grey",
    "Jesus H. Chirst",
    "Ghandi",
    "Nelson Mandela",
    "Engineer Gaming",
    "Lucifer",
    "Lord Hemou",
    "Luke Skywalker",
    "George Lucas",
    "Dwight D. Eisenhower",
    "J. Robert Oppenheimer",
    "Cao Cao"
]


setInterval(function() {

    if (document.getElementById("hottime").style.color != "red") {

    coin = Math.round(Math.random());
    bidAmount += (Math.random() * 10);
    bidAmount = Math.round(bidAmount);

    decimal = Math.round(Math.random() * 100);
    if (decimal <= 9) {
        decimal = "0" + decimal;
    }
    if (decimal > 99) {
        decimal = "00";
    }
    if (coin == 1) {
        coin = Math.round(Math.random());
        if (coin == 1) {
            coin = Math.round(Math.random());
            if (coin == 1) {
    
                    placeNPCbid(Math.floor(Math.random()*namelist.length))
                
            }
        }
    }
    
} else {
    document.getElementById("hottime").innerHTML = "SOLD to " + contender;
}

    function placeNPCbid(nameId) {

        document.getElementById("bid3").innerText = document.getElementById("bid2").innerText;
        document.getElementById("bid2").innerText = document.getElementById("bid1").innerText;
        document.getElementById("bid1").innerText = namelist[nameId] + " - $" + bidAmount.toLocaleString() + "." + decimal;
        contender = namelist[nameId];
    }

}, 500);
    
  
  