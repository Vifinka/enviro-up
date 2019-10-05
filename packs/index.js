var option = "<div class=\"level-background\" id=\"background\"><div class=\"level-top\"><div class=\"level-top-25\" id=\"top-left\"></div><div class=\"level-top-60\" id=\"top-center\"></div><div class=\"level-top-15\"><img src=\"\" class=\"level-top-logo\" id=\"top-right\"></div></div><div class=\"level-bottom\"><div class=\"level-bottom-inner\"><div class=\"level-bottom-inner-name\"><span class=\"delicious\">Info:</span></div><div class=\"level-bottom-inner-text\" id=\"info\"></div></div><div class=\"level-bottom-inner\"><div class=\"level-bottom-inner-list-name\"><span class=\"delicious\">Pomocky:</span></div><div class=\"level-bottom-inner-list-text\"><ul class=\"list-outside\" id=\"pomocky\"></ul></div><div class=\"level-bottom-inner-postup-text\"><ol class=\"postup-outside\" id=\"postup\"></ol></div><div class=\"level-bottom-inner-postup-name\"><span class=\"delicious\">Postup:</span></div></div></div></div>"
var image = ""

var Packs = "";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        Packs = response.packs;
        console.log(Packs);
        create_div();
    };
};

xhttp.open("GET", "index.json", true);
xhttp.send();


function create_div(){
    for(var i = 0; i <= Packs.length; i++){
        document.getElementById("THE_DIV").innerHTML += option;
    
        document.getElementById("background").id += "-" + i;
    
        document.getElementById("top-left").style.backgroundColor = Packs[i].color;
        document.getElementById("top-left").innerHTML = Packs[i].difficulty;
        document.getElementById("top-left").id += "-" + i;
    
        document.getElementById('top-center').style.backgroundColor = Packs[i].color_2;
        document.getElementById("top-center").innerHTML = Packs[i].name;
        document.getElementById("top-center").id += "-" + i;
    
        document.getElementById("top-right").style.backgroundColor = Packs[i].color;
        document.getElementById("top-right").scr = Packs[i].type_icon;
        document.getElementById("top-right").id += "-" + i;
    
        document.getElementById("info").innerHTML = Packs[i].info;
        document.getElementById("info").id += "-" + i;
    
        document.getElementById("pomocky").innerHTML = Packs[i].pomocky;
        document.getElementById("pomocky").id += "-" + i;
    
        document.getElementById("postup").innerHTML = Packs[i].postup;
        document.getElementById("postup").id += "-" + i;
    
        if(Packs[i].image_1 != "-"){
            document.getElementById("background-" + i).innerHTML += image;
        }
    }
}
