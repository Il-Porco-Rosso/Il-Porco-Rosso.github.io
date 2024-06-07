let Ibid = document.querySelector("#bid1");
let IIbid = document.querySelector("#bid2");
let IIIbid = document.querySelector("#bid3");
let coin = 1

let x = setInterval(function() {

    Ibid = document.querySelector("#bid1");
    IIbid = document.querySelector("#bid2");
    IIIbid = document.querySelector("#bid3");

    coinflip();

    if (coin == 1) {
        coinflip();
        if (coin == 1) {
            coinflip();
            if (coin == 1) {
                console.log("boom");
            }
        }
    }

function coinflip() {
        coin = Math.round(Math.random());
    } 

  }, 500);
  
  
  
  