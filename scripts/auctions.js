let bidAmount = 7000
let decimal = 1
let coin = 1
let namelist = ["Jane Doe", "Aeigh Luvsekks", "Jeff Beansauce", "Howard E. Snuts", "Nagisa Shiota", "Morris Merrier", "Porco Rosso", "John Wemmick", "Joe Shmoe", "Barack Obama"]


setInterval(function() {

    if (document.getElementById("hottime").style.color != "red") {

    coin = Math.round(Math.random());
    bidAmount = bidAmount += (Math.round(Math.random() * 10));
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
    
                    placeNPCbid(Math.round(Math.random()*10))
                
            }
        }
    }
    
}

    function placeNPCbid(nameId) {

        document.getElementById("bid3").innerText = document.getElementById("bid2").innerText;
        document.getElementById("bid2").innerText = document.getElementById("bid1").innerText;
        document.getElementById("bid1").innerText = namelist[nameId] + " - $" + bidAmount + "." + decimal;
    }

}, 500);
    
  
  