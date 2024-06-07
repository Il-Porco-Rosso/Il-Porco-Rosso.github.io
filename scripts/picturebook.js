const piclist = [
    '<img src="images/mug.png" alt="an image of a mug">',
    '<img src="images/cheese.png" alt="an image of cheese">',
    '<img src="images/Ambassador.png" alt="an image of the TF2 weapon called "The Ambassador" weilded by the Spy in that game">',
    '<img src="images/soap.png" alt="an image of a soap bottle"></img>',
    '<img src="images/box.png" alt="an image of a box of overflowing oranges"></img>'
]


let randpic = Math.floor(Math.random()*piclist.length);
let randpicII = Math.floor(Math.random()*piclist.length);

document.getElementById("auctiondisplay").innerHTML = piclist[randpic];
document.getElementById("auctiondisplayII").innerHTML = piclist[randpicII];