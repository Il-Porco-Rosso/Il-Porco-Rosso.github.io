let sbidAmount = 359;
let sdecimal = 1;
let scoin = 1;
let scontender = "joe";
let snamelist = [
    "VDV Disk","REDREY Disk","Barack Obama","Nagisa Shiota","Karma Akabane","The Reaper","Joe Gargery","LeBron James",
    "King DeDeDe","Escargoon","Hans Ohff","Jane Doe","John Wick","Elton John","Lego piece #32557","James Charles","Kanye East",
    "Botswana","Garry Mead","Goose Goose","Duck Goose","Gordon Ramsey","Doom Guy","Kratos","Master Cheif","Mace Windu",
    "Nick Fury","Guy Fiery","Doug Doug","Parkzer","Smallant","PointCrow","Uncle Dane","Mr. Beast","Sr. Pelo","Ip Man",
    "Sum Ting Wong","Wi Tu Low","Ho Li Fuk","Bang Ding Ow","Johnny Appleseed","Chess.com","Balu Paikeday","Mike Oxlong",
    "Hugh Jass","Hugh Jackminumen","Sing from Kung Fu Hustle","Chuck Norris","Bruce Lee","Jacklyn Harris","Jinji Li","Morris Hawk",
    "Sterling Silver","Russel Gebler","Sebastian Bach","Joey Blue","Baba Ali","General Electric","Govenor Phillip","Phillip Louis",
    "Louis Bonaparte","Shi Ting Fuk","Jake Fromst Eitfarm","Douglas Douglas","Ben Ghibli","Bennji Chan","Senku Chan","Gen Asahiri",
    "Tokugawa Ieyasu","London O' Neil","Nikko Foremayer","Jenifer Fulcrum","Jessie Pinkman","Mr. Fodd","Mr. Frodd","Charled"
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
        if (scontender == "Mr. Fodd") {
            sbidAmount *= 3; 
            document.getElementById("2bid1").innerText = snamelist[nameId] + " - $" + sbidAmount.toLocaleString() + ".00";
        }
    }

}, 1000);
    
  
  