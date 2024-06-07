let bidAmount
let coin = 1
let namelist = ["Joe Shmoe", "Jane Doe", "Jeff Beansauce", "Howard E. Snuts", "Nagisa Shiota", "Morris Merrier", "Porco Rosso", "John Wemmick"]
setInterval(function() {

    coin = Math.round(Math.random());


    if (coin == 1) {
        coin = Math.round(Math.random());
        if (coin == 1) {
            coin = Math.round(Math.random());
            if (coin == 1) {
                coin = Math.round(Math.random());
                if (coin == 1) {
                    console.log(Math.round(Math.random()*10 - 10));
    
                    placeNPCbid()



                }
            }
        }
    }

function placeNPCbid(nameId) {

    document.getElementById("bid3").innerText = document.getElementById("bid2").innerText;
    document.getElementById("bid2").innerText = document.getElementById("bid1").innerText;
    document.getElementById("bid1").innerText = 0
}

  }, 500);
  
  
  
  