let sbidAmount = 359;
let sdecimal = 1;
let scoin = 1;
let scontender = "joe";
let snamelist = [
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

    scoin = Math.round(Math.random());
    sbidAmount += (Math.random() * 10);
    sbidAmount = Math.round(sbidAmount);

    sdecimal = Math.round(Math.random() * 100);
    if (sdecimal <= 9) {
        sdecimal = "0" + sdecimal;
    }
    if (sdecimal > 99) {
        sdecimal = "00";
    }
    if (scoin == 1) {
        scoin = Math.round(Math.random());
        if (scoin == 1) {
            scoin = Math.round(Math.random());
            if (scoin == 1) {
    
                    splaceNPCbid(Math.floor(Math.random()*snamelist.length))
                
            }
        }
    }
    
} else {
    document.getElementById("IIndtime").innerHTML = "SOLD to " + scontender;
}

    function splaceNPCbid(nameId) {

        document.getElementById("2bid3").innerText = document.getElementById("2bid2").innerText;
        document.getElementById("2bid2").innerText = document.getElementById("2bid1").innerText;
        document.getElementById("2bid1").innerText = snamelist[nameId] + " - $" + sbidAmount.toLocaleString() + "." + sdecimal;
        scontender = snamelist[nameId];
    }

}, 1000);
    
  
  