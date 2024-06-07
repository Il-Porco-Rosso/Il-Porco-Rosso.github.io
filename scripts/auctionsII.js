let bidAmount = 359;
let decimal = 1;
let coin = 1;
let contender = "joe";
let namelist = [
    "Jane Doe", 
    "Aeigh Luvsekks", 
    "Jeff Beansauce", 
    "Howard E. Snuts", 
    "Howard Easenuts",
    "Nagisa Shiota", 
    "Morris Merrier", 
    "Porco Rosso", 
    "John Wemmick", 
    "Joe Shmoe", 
    "Barack Obama",
    "Barack Osama",
    "Redstone Ned",
    "Joe Stalin",
    "Mike Hawk",
    "Gay Bowser",
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
    "Biggus Dickus",
    "Karrie Maisak",
    "Hairy Potter",
    "Gandalf the Grey",
    "Jesus H. Chirst",
    "Ghandi",
    "Nelson Mandela",
    "Engineer Gaming",
    "Lucifer",
    "Major Payne",
    "Seaman Swallow",
    "Lord Hemou",
    "Luke Skywalker",
    "Mao Ze Dong",
    "Kim Jung-Un",
    "Kim Jung-Il",
    "Damacus Dimetris Bathoulmul James III Jr. Sr.",
    "George Lucas",
    "Dwight D. Eisenhower",
    "J. Robert Oppenheimer",
    "Cao Cao",
    "Agent 47",
    "Asian #5498352",
    "Secret Agent Man",
    "Secret Asian Man"
]


setInterval(function() {

    if (document.getElementById("2ndtime").style.color != "red") {

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
    document.getElementById("2ndtime").innerHTML = "SOLD to " + contender;
}

    function placeNPCbid(nameId) {

        document.getElementById("2bid3").innerText = document.getElementById("2bid2").innerText;
        document.getElementById("2bid2").innerText = document.getElementById("2bid1").innerText;
        document.getElementById("2bid1").innerText = namelist[nameId] + " - $" + bidAmount.toLocaleString() + "." + decimal;
        contender = namelist[nameId];
    }

}, 1000);
    
  
  