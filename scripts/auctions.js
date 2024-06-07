let bidAmount = 7000;
let decimal = 1;
let coin = 1;
let contender = "joe";
let namelist = [
    "Jane Doe", "Aeigh Luvsekks", "Jeff Beansauce", "Howard E. Snuts", "Howard Easenuts","Nagisa Shiota", "Morris Merrier", "Porco Rosso", "John Wemmick", "Joe Shmoe", "Barack Obama",
    "Barack Osama","Redstone Ned","Joe Stalin","Mike Hawk","Gay Bowser","VDV Disk","Joe Bidome","Ben Dover","Gum Guan","Guan Yu","Zhuge Liang","Dan TDM","REDREY Disk","El Donald","Shaquille O Nile",
    "Jack from Statefarm","Kingsley Shacklebolt","Shrek","Biggus Dickus","Sussus Amogus","Karrie Maisak","Hairy Potter","Gandalf the Grey","Jesus H. Chirst","Ghandi","Nelson Mandela",
    "Engineer Gaming","Lucifer","Major Payne","Seaman Swallow","Lord Hemou","Luke Skywalker","Mao Ze Dong","Kim Jung-Un","Kim Jung-Il","Damacus Dimetris Bathoulmul James III Jr. Sr.","George Lucas",
    "Dwight D. Eisenhower","J. Robert Oppenheimer","Cao Cao","Agent 47","Asian #5498352","Secret Agent Man","Secret Asian Man","Sun Tzu","Drake","City Government of Plano, Tx","Kendrick",
    "Kendrick Deeznuts","Vaporeon","Son Goku","Taylor Sift","Gru","Lord Farquaad","Juan Pablo Revera IV","Heisenburg from Breakingh Bad Season 2 Ep. 12","Al Capone","Al Capone II","Al Capone III",
    "Al Capone IV","Al Cap","El Cappie","Captain Murca","Iron Deficiency Man","Minecraft Steve","Sans Undertale","Technoblade","Techno Blade","Humpty Dumpty","Logan Paul","Mike Tyson",
    "Yi Long Ma","Johnny Fare","Lorem Ipsum","George Derby","Johnny Depp","Johnny Douglas","Doug Peter","Andrew Peter","Walter White","Jason Fial","Calum Bowen","Chris Bakerfield",
    "Tom Lively","Thomas DeTain Kengin","Sam Francisco","Van Coover","Herbert Shale","Elmer Gru","Max Pro","Dating Sim Emo Character","Isabelle Ringin","Yi Sun Sin","Mei Li","Jeff Chu",
    "Mike Cheng","Canai Seymore Ovit","Homer Simpson","Mario Mario","Luigi Mario","Donald Duck","Alttef Fore","Honda Ishigami","Dick Harbour","Rob Banks","Allison Spade","Jean Fodd"
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
        if (contender == "Shrek") {
            bidAmount *= 1.8;
            document.getElementById("bid1").innerText = namelist[nameId] + " - $" + bidAmount.toLocaleString() + ".69";
        }
    }

}, 250);
    
  
  