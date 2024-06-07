let bidAmount = 359;
let decimal = 1;
let coin = 1;
let contender = "joe";
let namelist = [
    "VDV Disk",
    "REDREY Disk",
    "Barack Obama",
    "Nagisa Shiota",
    "Karma Akabane",
    "The Reaper",
    "Joe Gargery",
    "LeBron James",
    "King DeDeDe",
    "Escargoon",
    "Hans Ohff"
]


setInterval(function() {

    if (document.getElementById("IIndtime").style.color != "red") {

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
    document.getElementById("IIndtime").innerHTML = "SOLD to " + contender;
}

    function placeNPCbid(nameId) {

        document.getElementById("2bid3").innerText = document.getElementById("2bid2").innerText;
        document.getElementById("2bid2").innerText = document.getElementById("2bid1").innerText;
        document.getElementById("2bid1").innerText = namelist[nameId] + " - $" + bidAmount.toLocaleString() + "." + decimal;
        contender = namelist[nameId];
    }

}, 1000);
    
  
  